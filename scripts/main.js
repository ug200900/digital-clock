//lets display the current time
var d, h, m, s, color, time;
function displayTime() {
	d = new Date(); //new data object
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	
	//add zero to the left of the numbers if they are single digits
	if(h <= 9) h = '0'+h;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;
	
	if (m % 2 ===0){
		color = "red";
	} else{
		color = "black";
	}

	
	//set background color
	document.body.style.background=color;
	//set time
	document.getElementById("x").innerText = h + " " + m + " " + s
	
	
	//retrigger the function every second
	setTimeout(displayTime, 1000);
}

displayTime();