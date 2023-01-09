/* =========MENU APPEAR========= */

function menuAppear() {
    var header = document.getElementById("header");
    var menu = document.getElementById("menu")

    if (header.className === "") {
      header.className = "navbar-mini";
      menu.className = "menu-mini-appear";
    } else {
      header.className = "";
      menu.className = "menu-mini";
    }
  }




/* =========SCROLL REVEAL========= */

function scrollReveal() {
	var revealPoint = 20;
	var revealElement = document.querySelectorAll(".reveal");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", scrollReveal);