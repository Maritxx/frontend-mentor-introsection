function expandMenu () {
	let sidebarMenu = document.getElementById('sidebarMenu');
	
	if (sidebarMenu.classList.contains('open')) {
		sidebarMenu.classList.remove('open');
	} else {
		sidebarMenu.classList.add('open');
	}
}

function expandMenu () {
	let navIcon = document.getElementById('nav-icon');

	if (navIcon.classList.contains('open')) {
		navIcon.classList.remove('open');
	} else {
		navIcon.classList.add('open');
	}
}