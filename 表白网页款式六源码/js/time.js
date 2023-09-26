function showTime() { 
	var currentDate = new Date(); 
	var startDate = new Date(2023, 8, 23,20,30);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 
	var currentTimeString = "Dear 安静:<br>"
		+ "We already know each other:<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + days +" </c>天 "
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + hours+" </c>时 "
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + minutes+" </c>分 "
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" +seconds+" </c>秒<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp只愿执子之手,与子偕老.<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
		+	"<c style=\"color: #CCCCCC; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" >----TO 安静   2023-09-23 </c>";
	document.getElementById("show").innerHTML=currentTimeString;  //改这地方
	window.setTimeout("showTime()", 1000); 
} 
