var heartBox = document.getElementsByClassName("heart");
// Dynamic control favorites icon display
for (const itemNode of heartBox) {
  var childNode = itemNode?.childNodes;
  itemNode.addEventListener("click", () => {
    if (itemNode.querySelector(".ph--heart-light") !== null) {
      itemNode.innerHTML =
        '<span class="ph--heart-fill" style="color: red;"></span>';
    } else {
      itemNode.innerHTML = '<span class="ph--heart-light"></span>';
    }
  });
}
