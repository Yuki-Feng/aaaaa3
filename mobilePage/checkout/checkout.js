// back to previious page
let goBack = document.querySelector("#goBack");
goBack.addEventListener("click", () => {
  window.history.back();
});
// three different payment methods
var optionIcon = document.querySelectorAll("#form-option-icon");

for (let index = 0; index < optionIcon.length; index++) {
  var childNode = optionIcon[index]?.childNodes;
  optionIcon[index].addEventListener("click", () => {
    optionIcon.forEach((itemNode) => (itemNode.innerHTML = ""));
    if (optionIcon[index].querySelector(".dashicons--yes") !== null) {
      optionIcon[index].innerHTML = "";
    } else {
      optionIcon[index].innerHTML = ' <span class="dashicons--yes"></span>';
    }
  });
}
// get data
let shopCatData = window.localStorage.getItem("shopCat") || [];
if (shopCatData?.length > 0) {
  shopCatData = JSON.parse(shopCatData);
}
let orderData = window.localStorage.getItem("order") || [];
if (orderData?.length > 0) {
  orderData = JSON.parse(orderData);
}
// address CreditCard

let confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", () => {
  console.log(111);
  if (shopCatData.length > 0) {
    let address = document.querySelector("#address")?.value;
    let CreditCard = document.querySelector("#CreditCard")?.value;
    // Make sure that each input box is filled with content
    if (address && CreditCard) {
      cartToOrder();
      window.location.href = "../payment/payment.html";
    } else {
      window.alert("Please input valid value!");
    }
  }
});

function cartToOrder(params) {
  // get data from shopCat to order
  window.localStorage.setItem(
    "order",
    JSON.stringify([...shopCatData, ...orderData])
  );
  window.localStorage.setItem("shopCat", "");
}
