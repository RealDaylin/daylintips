var codeForm = document.getElementById("form_code");

// show dashed border on code form

// addeventlistener

// hover on
codeForm.addEventListener("mouseenter", mouseenter_codeform);
// function
function mouseenter_codeform() {
  codeForm.style.border = "2px dashed #1a505a"
}

// hover off
codeForm.addEventListener("mouseleave", mouseleave_codeform);
// function
function mouseleave_codeform() {
    codeForm.style.border = "2px hidden #1a505a"
}