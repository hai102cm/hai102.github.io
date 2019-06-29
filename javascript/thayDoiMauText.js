// JavaScript Documen+

function timKiem () {
	var seach = document.getElementById("seach").value;
	var s = "bạn chưa nhập từ khóa tìm kiếm ";
	if 	(seach == "") {
		alert(s);
		var count = 0;
		var time = setInterval(function () {
			if (document.getElementById("seach").style.border == "")
				document.getElementById("seach").style.border = "2px solid red";
			else 
				document.getElementById("seach").style.border = "";
			count++;
			if (count ==10)
				clearInterval(time)
		}, 500);
	}
}