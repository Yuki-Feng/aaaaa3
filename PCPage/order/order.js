// Gets order data from storage
let orderData = window.localStorage.getItem("order") || [];
if (orderData?.length > 0) {
  orderData = JSON.parse(orderData);
}

let myCartGoodsRow = document.querySelector("#myCart-goods-row");

function getMyCartData(params) {
  // Order data
  let htmlStr = "";
  if (orderData.length > 0) {
    for (const itemGoods of orderData) {
      htmlStr += `<div class="myCart-goods">
              <div>
                <img src="../../assess/img/${itemGoods?.goodsImg}" alt="" />
                <p>
                  ${itemGoods?.goodsName} ${itemGoods?.goodsDes}
                </p>
              </div>
              <div style="margin-left: 50px">
                $ <span id="goodsPrice">${itemGoods?.goodsPrice}</span>
              </div>
              <div>
                
                <span class="num-txt" id="goodsNum">${itemGoods?.quantity}</span>
                
              </div>
              <div style="margin-left: 50px">
                $ <span id="totalPrice">${itemGoods?.total}</span>
              </div>
            </div>`;
    }
    myCartGoodsRow.innerHTML = htmlStr;
  }
}

let ContinueBtn = document.querySelector("#ContinueBtn");

ContinueBtn.addEventListener("click", () => {
  if (shopCatData?.length === 0) {
    window.alert("Sorry. No goods please add goods!");
  } else {
    window.location.href = "../collect/collect.html";
  }
});

getMyCartData();
