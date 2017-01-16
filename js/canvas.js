function drawCirleTimer()
{
	var x = $('#text_timer_div').offset().left + $('#text_timer_div').width() / 2;
	var y = $('#text_timer_div').offset().top + $('#text_timer_div').height() / 2 - $('#show_btn').height();
	drawColorCirle(x, y, 360, '#DBDBDB');
}

function drawColorCirle(x, y, degress, color)
{
	var obj = document.getElementById('circle_timer');
	var context = obj.getContext('2d');

	var r1 = 50;
	var r2 = r1 + 10;
	
	
	context.beginPath();
	context.moveTo(x,y);
	context.arc(x, y, 100, (-90) * Math.PI / 180, (degress - 90) * Math.PI / 180);
	context.fillStyle = color;
	context.strokeStyle = 'rgba(100, 100, 100, 0)';
	context.stroke();
	context.closePath();
	context.fill();
	
	
	context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 95, 0, Math.PI * 2);
    context.fill();
    context.globalCompositeOperation = "source-over";
}

function clearCanvas()
{
	var obj = document.getElementById('circle_timer');
	var context = obj.getContext('2d');
	context.clearRect(0, 0, obj.width, obj.height);
}
