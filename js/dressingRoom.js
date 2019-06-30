function init() {
  // 視窗RWD
  let bodySize = [];
  let htmlSize = [];
  window.addEventListener("resize", function() {
    if (innerWidth / innerHeight > 1.75) {
      bodySize[0] = document.body.clientWidth;
      bodySize[1] = document.body.clientHeight;
      htmlSize[0] = document.documentElement.clientWidth;
      htmlSize[1] = document.documentElement.clientHeight;
      gameSizing("body", htmlSize[0], htmlSize[1]);
    } else {
      gameSizing("body", bodySize[0], bodySize[1]);
    }
  });

  $(".lightBox").css({ display: "none" });

  // 燈箱按鈕
  $("#startBtn").click(startDraw);
  $(".whiteShirt").click(startDraw);
  $("#cancelBtn").click(cancel);
  $("#confirmBtn").click(confirm);

  // 顏色選擇器
  let r = 255;
  let g = 0;
  let b = 0;

  while (b < 255) {
    b++;
    displayBar(r, g, b);
  }
  while (r > 0) {
    r--;
    displayBar(r, g, b);
  }
  while (g < 255) {
    g++;
    displayBar(r, g, b);
  }
  while (b > 0) {
    b--;
    displayBar(r, g, b);
  }
  while (r < 255) {
    r++;
    displayBar(r, g, b);
  }
  while (g > 0) {
    g--;
    displayBar(r, g, b);
  }

  // 貓頭鷹幻燈片
  $(".owl-carousel").owlCarousel({
    loop: false,
    nav: true,
    responsive: {
      1000: {
        items: 3
      }
    },
    dots: false
  });

  // 換服裝
  // 先換帽帽
  $(".changeHat img").click(function() {
    let hatSrc = $(this).attr("src");
    $(".changedHat").attr("src", hatSrc);
  });
  // 再換衣服
  $(".changeClo img").click(function() {
    let clothSrc = $(this).attr("src");
    $(".changedClo").attr("src", clothSrc);
  });
  // 最後換鞋鞋
  $(".changeShoes img").click(function() {
    let shoesSrc = $(this).attr("src");
    $(".changedShoes").attr("src", shoesSrc);
  });
}

function gameSizing(tag, w, h) {
  document.querySelector(tag).style.width = w + "px";
  document.querySelector(tag).style.height = h + "px";
}

function displayBar(r, g, b) {
  const hex = dechex(r) + dechex(g) + dechex(b);
  $("#colorPicker").append(
    `<span id="${hex}" style="background-color:#${hex}"</span>`
  );
}

function startDraw() {
  $(".lightBox").css({ display: "flex" });
}

function cancel() {
  $(".lightBox").css({ display: "none" });
}

function confirm() {
  $(".lightBox").css({ display: "none" });
}

function dechex(dec) {
  var hex = dec.toString(16);
  if (hex.length == 1) hex = "0" + hex;
  return hex;
}

window.onload = init;
