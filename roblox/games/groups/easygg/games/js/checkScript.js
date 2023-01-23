var G = "Correct! You may go to the next question."
var B = "Not correct. Try again!"

// Check 1
function check1() {
    if (document.getElementById('input1').value == "yes") {
        document.getElementById('text1').innerHTML = G;
        document.getElementById("testImage1").src= "images/correct.svg";
    } else {
        document.getElementById('text1').innerHTML = B;
        document.getElementById("testImage1").src= "images/notCorrect.svg";
    }
}

// Check 2
function check2() {
    if (document.getElementById('input2').value == "yes") {
        document.getElementById('text2').innerHTML = G;
        document.getElementById("testImage2").src= "images/correct.svg";
    } else {
        document.getElementById('text2').innerHTML = B;
        document.getElementById("testImage2").src= "images/notCorrect.svg";
    }
}