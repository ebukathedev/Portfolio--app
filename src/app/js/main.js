$(document).ready(() => {

    // Adds Hamburger transition effect and reveals the menu
	$(".hamburger_menu").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("change");
		$(".links").slideToggle();
	});
});
