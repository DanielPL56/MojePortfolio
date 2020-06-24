function timer() {
    var today = new Date();

    var hour = today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();

    if (hour < 10)
        hour = "0" + hour;

    if (minute < 10)
        minute = "0" + minute;

    if (seconds < 10)
        seconds = "0" + seconds;

    document.getElementById("zegar").innerHTML = hour + ":" + minute + ":" + seconds
    setTimeout("timer()", 1000);
}