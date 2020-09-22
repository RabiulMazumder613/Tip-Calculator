function calculateTip() {
    //all necessary variables to manipulate the HTML tags
    var billAmt = document.querySelector(".bill").value;
    var serviceQual = document.querySelector(".serviceQual").value;
    var guestAmnt = document.querySelector(".guest").value;

    //checks if the user inputted information if not then asks them to enter it
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter all necessary information!");
        return;
    }
    if (guestAmnt === "" || guestAmnt <= 1) {
        guestAmnt = 1;
        document.getElementById("each").style.display = "none";
      } else {
        document.getElementById("each").style.display = "block";
      }

      var total = (billAmt * serviceQual) / guestAmnt;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
} 

function refresh() {
    var billAmt = document.querySelector(".bill").value;
    var serviceQual = document.querySelector(".serviceQual").value;
    var guestAmnt = document.querySelector(".guest").value;
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    billAmt = document.querySelector(".bill").value = "";
    serviceQual = document.querySelector(".serviceQual").value = "";
    guestAmnt = document.querySelector(".guest").value = "";
}

//hides the tip amount until all infomrmation is entered and after calculated displays it 
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//when the 'Calculate Tip!' button is pressed with all information entered it runs the function calculateTip
document.getElementsByClassName(".calculate").onclick = function() {
    calculateTip();
}

//when the 'Reset/ button is pressed it clears all information the user entered to be used again
document.getElementsByClassName(".reset").onclick = function() {
    refresh();
}