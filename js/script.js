
//function

function calculateTip() {

	//Store the data of inputs
	var billAmount = document.getElementById('billAmount').value;
	var serviceQuality = document.getElementById('serviceQuality').value;
	var numPeople = document.getElementById('totalPeople').value;
    

    // input validation 
    if(billAmount === "" || serviceQuality === 0) {
    	window.alert("Please enter a value");
    	return; // to prevent the function from continuing
    }


    //Check to see if totalPeople is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";

    }else {
    	document.getElementById("each").style.display = "block";
    }
    


     //calculation
     var total = (billAmount * serviceQuality) / numPeople;
     total = Math.round(total * 100) / 100;
     total = total.toFixed(2);


     //Display the tip

     document.getElementById("totalTip").style.display = "block";
     document.getElementById("tip").innerHTML = total; 
}






//hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
//document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function () { calculateTip();};
