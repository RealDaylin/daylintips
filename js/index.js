var menuIcon = document.getElementById("menuIcon");
var menuDiv = document.getElementById("div-menu");

// addEventListener
menuIcon.addEventListener("click", menuIconRotate);

// menuIconRotate function
function menuIconRotate() {
  if (menuIcon.style.transform == "rotate(-90deg)") {
    menuIcon.style.transform = "rotate(0deg)";
    menuDiv.style.display = "none";
  } else {
    menuIcon.style.transform = "rotate(-90deg)";
    menuDiv.style.display = "block";
  }
}

// check offline or online
if (navigator.onLine) {
  console.log(" browser online ");
} else {
  console.log(" browser offline ");
  window.location.replace('offline.html')
}