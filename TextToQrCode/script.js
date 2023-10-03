function generateQR() {
  let gApi = "https://chart.googleapis.com/chart?cht=qr&chs=";

  let myImg = document.getElementById("qrImg");
  let mytext = document.getElementById("qrText").value;
  let mysize = document.getElementById("size").value;

  if (mytext !== "" && mysize === "150") {
    myImg.src = gApi + "150x150" + "&chl=" + mytext;
  } else if (mytext !== "" && mysize === "200") {
    myImg.src = gApi + "200x200" + "&chl=" + mytext;
  } else if (mytext !== "" && mysize === "250") {
    myImg.src = gApi + "250x250" + "&chl=" + mytext;
  } else if (mytext !== "" && mysize === "300") {
    myImg.src = gApi + "300x300" + "&chl=" + mytext;
  } else {
    alert("Enter your messege");
  }
}

function resetText() {
  document.getElementById("qrText").value = "";
  document.getElementById("qrImg").src = "";
}
