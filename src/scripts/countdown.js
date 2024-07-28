//First reveal: Jul 28, 2024 12:00:00
//Second reveal: Auditorium time
var countDownDate = new Date("Jul 28, 2024 14:50:00").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("countdown_timer").innerHTML =
		hours + ":" + minutes + ":" + seconds;

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown_timer").innerHTML =
			"Cards are revealed!";
	}
}, 1000);
