var heartBox = document.getElementsByClassName("heart");
for (const itemNode of heartBox) {
  var childNode = itemNode?.childNodes;
  itemNode.addEventListener("click", () => {
    if (itemNode.querySelector(".ph--heart-fill").style.color === "red") {
      itemNode.innerHTML =
        '<span class="ph--heart-fill" style="color: rgb(207, 208, 209)"></span>';
    } else {
      itemNode.innerHTML =
        '<span class="ph--heart-fill" style="color: red;"></span>';
    }
  });
}
// Simulated search
let searchBtn = document.querySelector("#searchBtn");
let mainShow = document.querySelector("#main-show");

searchBtn.addEventListener("click", () => {
  let inputValue = document.querySelector("#searchInput")?.value;
  mainShow.innerHTML = `Result for "${inputValue}"`;
});
