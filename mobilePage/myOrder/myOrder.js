// back to previous page
let goBack = document.querySelector("#goBack");
goBack.addEventListener("click", () => {
  window.history.back();
});
let orderData = window.localStorage.getItem("order") || [];
if (orderData?.length > 0) {
  orderData = JSON.parse(orderData);
}

let myCartGoodsRow = document.querySelector("#myCart-goods-row");

function getMyCartData(params) {
  // Dynamically render pages based on order data
  let htmlStr = "";
  if (orderData.length > 0) {
    for (const itemGoods of orderData) {
      htmlStr += `<div class="cart-list">
            <div class="cart-img">
              <img src="../../assess/img/${itemGoods?.goodsImg}" alt="" />
            </div>
            <div class="cart-info">
              <div class="cart-text">
                <span class="goods-name"> ${itemGoods?.goodsName}</span>
                <span class="goods-des">${itemGoods?.goodsDes}</span>
              </div>
              <div class="goods-tool">
                <div class="goods-num">
                  Qty.: <span>${itemGoods?.quantity}</span> pcs
                </div>
                <div class="goods-price">
                  $ <span id="totalPrice">${itemGoods?.total}</span>
                </div>
              </div>
            </div>
          </div>`;
    }
    myCartGoodsRow.innerHTML = htmlStr;
  }
}

let Active = document.querySelector("#Active");
let Completed = document.querySelector("#Completed");
let Cancelled = document.querySelector("#Cancelled");
Active.addEventListener("click", () => {
  Active.style.color = "rgb(156, 194, 102)";

  Completed.style.color = "white";
  Cancelled.style.color = "rgb(94, 104, 84)";
  getMyCartData();
});
Completed.addEventListener("click", () => {
  Completed.style.color = "rgb(156, 194, 102)";

  Active.style.color = "white";
  Cancelled.style.color = "rgb(94, 104, 84)";
  myCartGoodsRow.innerHTML = ` <div style="font-size: 20px; font-weight: bold; margin-top: 30px;text-align: center;"
          >No goods please add goods!</div
        >`;
});
Cancelled.addEventListener("click", () => {
  Cancelled.style.color = "rgb(156, 194, 102)";

  Active.style.color = "white";
  Completed.style.color = "rgb(94, 104, 84)";
  myCartGoodsRow.innerHTML = ` <div style="font-size: 20px; font-weight: bold; margin-top: 30px;text-align: center;"
          >No goods please add goods!</div
        >`;
});

getMyCartData();
