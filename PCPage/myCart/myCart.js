// get shopping cart data
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
      if (num != "1") goodsNum[index].innerHTML = ~~num - 1;
      totalPrice[index].innerHTML = (
        ~~goodsPrice[index].innerHTML * ~~goodsNum[index].innerHTML
      )?.toFixed(2);
      shopCatData[index].quantity = ~~goodsNum[index].innerHTML;
      shopCatData[index].total = totalPrice[index].innerHTML;
    });
    numRight[index].addEventListener("click", () => {
      var num = goodsNum[index].innerHTML;
      goodsNum[index].innerHTML = ~~num + 1;
      totalPrice[index].innerHTML = (
        ~~goodsPrice[index].innerHTML * ~~goodsNum[index].innerHTML
      )?.toFixed(2);
      shopCatData[index].quantity = ~~goodsNum[index].innerHTML;
      shopCatData[index].total = totalPrice[index].innerHTML;
      console.log(shopCatData);
    });
  }
}

function getMyCartData(params) {
  // Dynamically render pages based on shopping cart data
  let htmlStr = "";
  if (shopCatData.length > 0) {
    for (const itemGoods of shopCatData) {
      htmlStr += `<div class="myCart-goods">
              <div>
                <img src="../../assess/img/${itemGoods?.goodsImg}" alt="" />
                <p>
                  ${itemGoods?.goodsName} ${itemGoods?.goodsDes}
                </p>
              </div>
              <div style="margin-left: 50px">
                $ <span id="goodsPrice">${itemGoods?.goodsPrice.toFixed(
                  2
                )}</span>
              </div>
              <div>
                <span class="num-left" id="numLeft">
                  <span class="ic--round-minus"></span>
                </span>
                <span class="num-txt" id="goodsNum">${
                  itemGoods?.quantity
                }</span>
                <span class="num-right">
                  <span class="ic--baseline-add" id="numRight"></span>
                </span>
              </div>
              <div style="margin-left: 50px">
                $ <span id="totalPrice">${(~~itemGoods?.total).toFixed(
                  2
                )}</span>
              </div>
            </div>`;
    }
    myCartGoodsRow.innerHTML = htmlStr;
  }

  addEvent();
}

let checkOutBtn = document.querySelector("#checkOutBtn");
checkOutBtn.addEventListener("click", () => {
  let checkOutBtn = document.querySelector("#checkOutBtn");
  // define checkOut event
  if (shopCatData?.length === 0) {
    window.alert("Sorry. No goods please add goods!");
  } else {
    console.log(shopCatData);
    window.localStorage.setItem("shopCat", JSON.stringify(shopCatData));
    window.location.href = "../checkout/checkout.html";
  }
});

getMyCartData();
