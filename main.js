function expandMenu () {
let sidebarMenu = document.getElementById('sidebarMenu');
	
	if (sidebarMenu.classList.contains('open')) {
		sidebarMenu.classList.remove('open');
	} else {
		sidebarMenu.classList.add('open');
	}
}