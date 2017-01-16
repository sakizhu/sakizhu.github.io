var startX;
var lastTouchX;
var lastObjX = 0;

function touchSatrtFunc(evt) {
	var touch = evt.touches[0]; //获取第一个触点  
	var x = Number(touch.pageX); //页面触点X坐标    
	//alert(touch.target.nodeName);
	//记录触点初始位置  
	startX = x;
	lastTouchX = x;
}

function touchMoveFunc(evt) {
	var touch = evt.touches[0]; //获取第一个触点  
	var x = Number(touch.pageX); //页面触点X坐标  
	var offset = x - lastTouchX;
	lastObjX = lastObjX + offset;
	evt.target.style.marginLeft = lastObjX.toString() + "px";
	lastTouchX = x;
	console.log("last touch x : " + lastTouchX);
	console.log("last obj x : " + lastObjX);
}

function touchEndFunc(evt) {
	var touch = evt.changedTouches[0]; //获取第一个触点  
	var x = Number(touch.pageX); //页面触点X坐标  
	if (x - startX > 80 || startX - x > 80)
	{
		var id = evt.target.id;
		var underlinePostion = id.lastIndexOf('_');
		var html = $('#home_task_' + id.substr(underlinePostion + 1, id.length - underlinePostion - 1)).html();
		$('#home_task_' + id.substr(underlinePostion + 1, id.length - underlinePostion - 1)).html(html + "<span class='badge' style='background-color: green;'><span class='glyphicon glyphicon-ok'></span></span>'");
	    evt.target.parentNode.removeChild(evt.target);
	    
	}
	evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
	evt.target.style.marginLeft = "0px";
	lastObjX = 0;
	lastTouchX = 0;
}