var menuIcon = document.getElementById("menuIcon");

// addEventListener
menuIcon.addEventListener("click", menuIconRotate);

// menuIconRotate function
function menuIconRotate() {
  menuIcon.style.transform = "rotate(90deg)";
}

// check offline or online
if (navigator.onLine) {
  console.log(" browser online ");
} else {
  console.log(" browser offline ");
  window.location.replace('offline.html')
}