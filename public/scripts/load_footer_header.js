//On Page Load
$(() => {
    $('#footer').load('../public/html/footer.html');

    //Canvas for the header
    var canvas = document.getElementById("headerCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('♡ שליח עד הבית חינם בקנייה של 249 ש"ח ♡', canvas.width / 2, canvas.height / 2);
})