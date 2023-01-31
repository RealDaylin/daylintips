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
    menuDiv.style.display = "flex";
    menuDiv.style.float = "left";
    menuDiv.style.padding = "10px";
    menuDiv.style.background = "var(--color-info-light)";
    menuDiv.style.boxShadow = "var(--box-shadow)";
    menuDiv.style.width = "530px";
    menuDiv.style.borderRadius = "var(--border-radius-1)";
  }
}

// check offline or online
if (navigator.onLine) {
  console.log(" browser online ");
} else {
  console.log(" browser offline ");
  window.location.replace('offline.html')
}