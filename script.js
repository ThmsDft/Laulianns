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