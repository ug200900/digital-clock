//lets display the current time
var d, h, m, s, color, time, colorH;
function displayTime() {
	d = new Date(); //new data object
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	colorH = ["white", "lightblue", "green"]
	
	//add zero to the left of the numbers if they are single digits
	if(h <= 9) h = '0'+h;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;
	
	if (m % 2 ===0){
		color = "red";
	} else{
		color = "black";
	}

	if (m % 5 ===0){
		color = '#'+Math.floor(Math.random()*16777215).toString(16);
	}

	if (m % 1 === 0){
		document.getElementById('x').style.color = colorH[Math.floor(Math.random()*colorH.length)];
	}
	
	//set background color
	document.body.style.background=color;
	//set time
	document.getElementById("x").innerText = h + " " + m + " " + s
	document.getElementById('x').style.color = colorH[h/2];
	
	
	//retrigger the function every second
	setTimeout(displayTime, 1000);
}

displayTime();