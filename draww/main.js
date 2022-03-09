function draw(){

	 let canvas = document.getElementById('canva'); 
	 let ctx = canvas.getContext('2d'); 
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = "10";
	ctx.moveTo(100,150);
	ctx.lineTo(100,250);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "blue";
	ctx.lineWidth = "6";
	ctx.moveTo(200,100);
	ctx.lineTo(400,100);
	ctx.stroke();   
}