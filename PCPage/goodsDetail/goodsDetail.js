// get shopCat data
let shopCatData = window.localStorage.getItem("shopCat") || [];
if (shopCatData?.length > 0) {
  shopCatData = JSON.parse(shopCatData);
}
let showData = [];
// get elements
let shopPoint = document.querySelector("#shop-point");
var addCartButton = document.querySelector("#addCartButton");
let shopDetail = document.querySelector("#shop-detail");

var shopBox = document.querySelector("#shop-card");

shopBox.addEventListener("click", () => {
  let showCatData = shopCatData;
  var shopDetail = document.querySelector(".shop-detail");
  var style = window.getComputedStyle(shopDetail);
  // Dynamic control card height to achieve display
  if (style.height === "0px") {
    shopDetail.style.height = "auto";
    shopDetail.style.border = "1px solid black";
    if (showCatData?.length > 0) {
      shopDetail.innerHTML = ` <div class="shop-detail-title" id="shop-detail-title">
                    <img
                      src="../../assess/img/${
                        showCatData[showCatData.length - 1]?.goodsImg
                      }"
                      alt=""
                      id="shop-detail-img"
                    />
                    <div>
                      <div id="shop-detail-text">
                        ${showCatData[showCatData.length - 1]?.goodsName} ${
        showCatData[showCatData.length - 1]?.goodsDes
      }
                      </div>
                      <div>
                        Qty: <span id="shop-detail-buyNumber">${
                          showCatData[showCatData.length - 1]?.quantity
                        }</span> pcs
                      </div>
                    </div>
                    <div style="cursor: pointer">
                      <span class="streamline--delete-1-solid"></span>
                    </div>
                  </div>
                  <div class="shop-detail-total" id="shop-detail-total">
                    <span>Subtotal:</span>
                    <span>$ ${(~~showCatData[showCatData.length - 1]
                      ?.total).toFixed(2)}</span>
                  </div>
                  <div class="shop-detail-button">
                    <span><a href="../myCart/myCart.html">View Cart</a></span>
                    <span
                      ><a href="../checkout/checkout.html">Checkout</a></span
                    >
                  </div>`;
    } else {
      shopDetail.innerHTML = ` 
                  <div class="shop-detail-button">
                    <span><a href="../myCart/myCart.html">View Cart</a></span>
                    <span
                      ><a href="../checkout/checkout.html">Checkout</a></span
                    >
                  </div>`;
    }
  } else {
    shopDetail.style.height = "0px";
    shopDetail.style.border = "none";
  }
});
// get goodsData
function getData(params) {
  let urlParams = new URLSearchParams(window.location.href.split("?")[1]);
  let goodsID = 1;
  for (const [key, value] of urlParams.entries()) {
    if (key === "goodsID") goodsID = value;
  }
  const data = [
    {
      goodsID: 1,
      goodsName: "Tropical Fly-catcher",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 33.0,
      goodsImg: "goods2-1.png",
    },
    {
      goodsID: 2,
      goodsName: "Giant bark jumping spider",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 27.99,
      goodsImg: "goods2-2.png",
    },
    {
      goodsID: 3,
      goodsName: "Australian tarantula",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 70.0,
      goodsImg: "goods2-3.png",
    },
    {
      goodsID: 4,
      goodsName: "Desert tarantula",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 50.0,
      goodsImg: "goods2-4.png",
    },
    {
      goodsID: 5,
      goodsName: "Jungle huntsman",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 20.0,
      goodsImg: "goods3.png",
    },
    {
      goodsID: 6,
      goodsName: "JOvial jumping spider",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 27.5,
      goodsImg: "goods4.png",
    },
    {
      goodsID: 7,
      goodsName: "3 SpotCrab Spider",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 15.0,
      goodsImg: "goods2-1.png",
    },
    {
      goodsID: 8,
      goodsName: "Knobbly crab spider",
      goodsDes: "(Plexippus petersi) Captive Bred Juvie",
      goodsQuantity: 1,
      goodsPrice: 15.0,
      goodsImg: "goods2-2.png",
    },
  ];
  
  showData = data?.filter((item) => item?.goodsID === ~~goodsID);
  var goodsImg = document.querySelectorAll("#goodsImg");
  for (const itemNode of goodsImg) {
    itemNode.src = `../../assess/img/${showData[0].goodsImg}`;
  }
  var goodsName = document.querySelector("#goodsName");
  var goodsDes = document.querySelector("#goodsDes");
  var goodsPrice = document.querySelector("#goodsPrice");
  console.log(showData[0]?.goodsDes);
  goodsName.innerHTML = showData[0]?.goodsName;
  goodsDes.innerHTML = showData[0]?.goodsDes;
  goodsPrice.innerHTML = `$${showData[0]?.goodsPrice?.toFixed(2)}`;

  // Processing shopping cart data

  if (shopCatData?.length === 0) {
    // no product
    shopPoint.style.display = "none";
  } else {
    if (
      shopCatData?.filter((item) => item?.goodsID === ~~goodsID)?.length === 0
    ) {
      addCartButton.innerHTML =
        'Add to Cart <span class="mdi--shopping-cart-outline" id="add-shop-card"></span>';
    } else {
      addCartButton.innerHTML =
        '<span class="dashicons--yes" id="add-shop-card"  style="font-size: 70px;"></span>';
    }
  }
}

// Add and subtract button
var numLeft = document.querySelector("#numLeft");
var numRight = document.querySelector("#numRight");
var goodsNum = document.querySelector("#goodsNum");
numLeft.addEventListener("click", () => {
  var num = goodsNum.innerHTML;
  if (num != "1") goodsNum.innerHTML = ~~num - 1;
});
numRight.addEventListener("click", () => {
  var num = goodsNum.innerHTML;
  goodsNum.innerHTML = ~~num + 1;
});

// add to cart
addCartButton.addEventListener("click", () => {
  if (addCartButton.querySelector(".mdi--shopping-cart-outline")) {
    console.log(showData);
    shopPoint.style.display = "block";
    let catItem = {
      ...showData[0],
      quantity: ~~goodsNum.innerHTML,
      total: (showData[0]?.goodsPrice * ~~goodsNum.innerHTML).toFixed(2),
    };

    shopCatData = [...shopCatData, catItem];
    window.localStorage.setItem("shopCat", JSON.stringify(shopCatData));
    addCartButton.innerHTML =
      '<span class="dashicons--yes" id="add-shop-card"  style="font-size: 70px;"></span>';
  }
});

getData();
