const menu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".btn__menu:not(.btn__menu--close)");
const menuClose = document.querySelector(".btn__menu--close");

function setMenuOpen(isOpen) {
	document.body.classList.toggle("menu--open", isOpen);
	menu.setAttribute("aria-hidden", String(!isOpen));
	menuToggle.setAttribute("aria-expanded", String(isOpen));

	if (isOpen) {
		menuClose.focus();
	} else {
		menuToggle.focus();
	}
}

menuToggle.addEventListener("click", () => setMenuOpen(true));
menuClose.addEventListener("click", () => setMenuOpen(false));

menu.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && document.body.classList.contains("menu--open")) {
		setMenuOpen(false);
	}
});
