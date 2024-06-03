// back to previous page
let goBack = document.querySelector("#goBack");
goBack.addEventListener("click", () => {
  window.history.back();
});

let totalPrice = document.querySelector("#totalPrice");
let totalCost = document.querySelector("#totalCost");
// get cart data
let shopCatData = window.localStorage.getItem("shopCat") || [];
if (shopCatData?.length > 0) {
  shopCatData = JSON.parse(shopCatData);
}

let myCartGoodsRow = document.querySelector("#myCart-goods-row");

function addEvent(params) {
  // Add the corresponding event function for each line of the add/subtract button
  let goodsPrice = document.querySelectorAll("#goodsPrice");
  let numLeft = document.querySelectorAll("#numLeft");
  let numRight = document.querySelectorAll("#numRight");
  let goodsNum = document.querySelectorAll("#goodsNum");
  let totalPrice = document.querySelectorAll("#totalPrice");
  for (let index = 0; index < numLeft.length; index++) {
    numLeft[index].addEventListener("click", () => {
      var num = goodsNum[index].innerHTML;
      if (num != "1") {
        goodsNum[index].innerHTML = ~~num - 1;
        // totalPrice[index].innerHTML = (
        //   ~~goodsPrice[index].innerHTML * ~~goodsNum[index].innerHTML
        // )?.toFixed(2);
        shopCatData[index].quantity = ~~goodsNum[index].innerHTML;
        shopCatData[index].total = (
          ~~goodsPrice[index].innerHTML * ~~goodsNum[index].innerHTML
        )?.toFixed(2);
        computedTotalPrice(shopCatData);
      }
    });
    numRight[index].addEventListener("click", () => {
      var num = goodsNum[index].innerHTML;
      goodsNum[index].innerHTML = ~~num + 1;
      // totalPrice[index].innerHTML = (
      //   ~~goodsPrice[index].innerHTML * ~~goodsNum[index].innerHTML
      // )?.toFixed(2);
      shopCatData[index].quantity = ~~goodsNum[index].innerHTML;
      shopCatData[index].total = (
        ~~goodsPrice[index].innerHTML * ~~goodsNum[index].innerHTML
      )?.toFixed(2);
      computedTotalPrice(shopCatData);
    });
  }
}

// calculate total price
function computedTotalPrice(goodsList = []) {
  let total = 0;
  for (const itemGoods of shopCatData) {
    total += ~~itemGoods?.total;
  }
  totalPrice.innerHTML = `$ ${total.toFixed(2)}`;
  totalCost.innerHTML = `$ ${total.toFixed(2)}`;
}

function getMyCartData(params) {
  // Dynamically render pages based on shopping cart data
  let htmlStr = "";
  if (shopCatData.length > 0) {
    for (const itemGoods of shopCatData) {
      htmlStr += `<div class="cart-list">
          <div class="cart-img">
            <img src="../../assess/img/${itemGoods?.goodsImg}" alt="" />
          </div>
          <div class="cart-info">
            <div class="cart-text">
              <span class="goods-name"> ${itemGoods?.goodsName}</span>
              <span class="goods-des"
                >${itemGoods?.goodsDes}</span
              >
            </div>
            <div class="goods-tool">
              <div class="goods-price">$ <span id="goodsPrice">${itemGoods?.goodsPrice.toFixed(
                2
              )}</div>
              <div class="quanty-tool">
                <span class="num-left" id="numLeft">
                  <span class="ic--round-minus"></span>
                </span>
                <span class="num-txt" id="goodsNum">${
                  itemGoods?.quantity
                }</span>
                <span class="num-right" id="numRight">
                  <span class="ic--baseline-add"></span>
                </span>
              </div>
            </div>
          </div>
        </div>`;
    }
    myCartGoodsRow.innerHTML = htmlStr;
    computedTotalPrice(shopCatData);
  } else {
    myCartGoodsRow.innerHTML = ` <span style="font-size: 20px; font-weight: bold; margin-top: 30px"
          >No goods please add goods!</span
        >`;
  }

  addEvent();
}

let checkOutBtn = document.querySelector("#checkOutBtn");
checkOutBtn.addEventListener("click", () => {
  // Define the checkOut button event
  if (shopCatData?.length === 0) {
    window.alert("Sorry. No goods please add goods!");
  } else {
    window.localStorage.setItem("shopCat", JSON.stringify(shopCatData));
    window.location.href = "../checkout/checkout.html";
  }
});

getMyCartData();
