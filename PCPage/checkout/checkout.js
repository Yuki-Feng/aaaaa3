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
// firstName lastName phoneNumber email Postcode address CreditCard

let confirmBtn = document.querySelector(".confirmBtn");
let goodsRows = document.querySelector("#goods-rows");
let totalPriceEle = document.querySelector("#totalPriceEle");

function getCheckOutData(params) {
  let htmlStr = "";
  let totalPrice = 0;
  if (shopCatData?.length > 0) {
    for (const itemGoods of shopCatData) {
      htmlStr += `<div class="checkout-row-goods" id="checkout-row-goods">
                <span>
                    ${itemGoods?.goodsName} ${itemGoods?.goodsDes}    X ${itemGoods?.quantity}
                </span>
                <span>$ ${itemGoods?.total}</span>
              </div>`;
      totalPrice = parseFloat(totalPrice) + parseFloat(itemGoods?.total);
    }
  }
  goodsRows.innerHTML = htmlStr;
  totalPriceEle.innerHTML = `$ ${(~~totalPrice).toFixed(2)}`;
}
// confirm 
confirmBtn.addEventListener("click", () => {
  if (shopCatData.length > 0) {
    let firstName = document.querySelector("#firstName")?.value;
    let lastName = document.querySelector("#lastName")?.value;
    let phoneNumber = document.querySelector("#phoneNumber")?.value;
    let email = document.querySelector("#email")?.value;
    let Postcode = document.querySelector("#Postcode")?.value;
    let address = document.querySelector("#address")?.value;
    let CreditCard = document.querySelector("#CreditCard")?.value;
    // ensure every input details
    if (
      firstName &&
      lastName &&
      phoneNumber &&
      email &&
      Postcode &&
      address &&
      CreditCard
    ) {
      cartToOrder();
      window.location.href = "../order/order.html";
    } else {
      window.alert("Please input valid value!");
    }
  }
});

function cartToOrder(params) {
  // Transfer data from shopping cart to order
  window.localStorage.setItem(
    "order",
    JSON.stringify([...shopCatData, ...orderData])
  );
  window.localStorage.setItem("shopCat", "");
}
getCheckOutData();
