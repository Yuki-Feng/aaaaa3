let menuIcon = document.querySelector("#menu-icon");
let menuNav = document.querySelector("#menu-nav");
let shopFirst = document.querySelector("#shop-first");
let shopSecond = document.querySelector("#shop-second");

menuIcon.addEventListener("click", () => {
  if (menuNav?.style.display === "none") {
    menuNav.style.display = "block";
  } else {
    menuNav.style.display = "none";
  }
});
shopFirst.addEventListener("click", () => {
  if (shopFirst.querySelector(".mingcute--right-fill")) {
    shopFirst
      .querySelector(".mingcute--right-fill")
      .setAttribute("class", "mingcute--down-fill");
    shopSecond.style.height = "auto";
  } else {
    shopFirst
      .querySelector(".mingcute--down-fill")
      .setAttribute("class", "mingcute--right-fill");
    shopSecond.style.height = "0";
  }
});
