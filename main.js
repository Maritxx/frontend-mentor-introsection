//Dropdown for the sidebar menu for mobile.
function expandMenu () {
	let sidebarMenu = document.getElementById('sidebarMenu');
	
	if (sidebarMenu.classList.contains('open')) {
		sidebarMenu.classList.remove('open');
	} else {
		sidebarMenu.classList.add('open');
	}
}

//Hamburger button toggle effect.
function navToggle () {
	let navIcon = document.getElementById('nav-icon');

	if (navIcon.classList.contains('open')) {
		navIcon.classList.remove('open');
	} else {
		navIcon.classList.add('open');
	}
}


//Add overlay when clicking menu button.
function overlayToggle () {
	let bodyElement = document.body;

	if (bodyElement.classList.contains('overlay')) {
		bodyElement.classList.remove('overlay');
	} else {
		bodyElement.classList.add('overlay');
	}
}

//Assiging dropdown and button toggle effect to hamburger button.
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", expandMenu);
menuButton.addEventListener("click", navToggle);
menuButton.addEventListener("click", overlayToggle);

