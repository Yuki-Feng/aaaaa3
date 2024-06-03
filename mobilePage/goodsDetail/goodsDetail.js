let shopCatData = window.localStorage.getItem("shopCat") || [];
if (shopCatData?.length > 0) {
  shopCatData = JSON.parse(shopCatData);
}
let showData = [];
// Get page element
let shopPoint = document.querySelector("#shop-point");
var heartBox = document.getElementsByClassName("heart");
// Dynamically control the display of favorites icon
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
// plus and minus
var numLeft = document.querySelector("#numLeft");
var numRight = document.querySelector("#numRight");
var goodsNum = document.querySelector("#goodsNum");
var totalPrice = document.querySelector("#totalPrice");
numLeft.addEventListener("click", () => {
  var num = goodsNum.innerHTML;
  if (num != "1") {
    goodsNum.innerHTML = ~~num - 1;
    totalPrice.innerHTML = `$ ${(showData[0]?.goodsPrice * (~~num - 1)).toFixed(
      2
    )}`;
  }

  // showData[0]?.goodsPrice;
});
numRight.addEventListener("click", () => {
  var num = goodsNum.innerHTML;
  goodsNum.innerHTML = ~~num + 1;
  totalPrice.innerHTML = `$ ${(showData[0]?.goodsPrice * (~~num + 1)).toFixed(
    2
  )}`;
});

// back to previous page
let goBack = document.querySelector("#goBack");
goBack.addEventListener("click", () => {
  window.history.back();
});
// cart
let addCartButton = document.querySelector("#addCartButton");
// add to cart
addCartButton.addEventListener("click", () => {
  if (addCartButton.querySelector(".mdi--shopping-cart-outline")) {
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
      window.location.href = "../goodsList/goodsList.html"; 
  }
});

// get data
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
  // shopcat data

  showData = data?.filter((item) => item?.goodsID === ~~goodsID);

  var goodsImg = document.querySelectorAll("#goodsImg");
  for (const itemNode of goodsImg) {
    itemNode.src = `../../assess/img/${showData[0].goodsImg}`;
  }
  var goodsName = document.querySelector("#goodsName");
  totalPrice = document.querySelector("#totalPrice");
  // console.log(showData[0]?.goodsDes);
  goodsName.innerHTML = showData[0]?.goodsName;
  totalPrice.innerHTML = `$${showData[0]?.goodsPrice?.toFixed(2)}`;
  // shopcart data
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

getData();
