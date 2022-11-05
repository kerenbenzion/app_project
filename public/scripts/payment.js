var cart = window.localStorage.getItem('cart').split('|')
for (var i = 0; i < cart.length; i++) {
    $(".shopping-bag").append('<div style="height:8cm;" class="card box-image"></div>');
};
var total_price = 0;
var boxElts = document.getElementsByClassName("card");

for (let i = 0; i < cart.length; i++) {
    var current_product = cart[i].split('&')
    total_price += parseInt(current_product[1]);
    boxElts[i].innerHTML = "<img class=card-img-top src=" + current_product[2] + "' alt='image'> \
    <h5 class=cart-title>" + current_product[3] + "</h5> \
    <p class=card-text>" + current_product[1] + "₪</p>";
}
var total = document.getElementById("total");
total.innerHTML = total_price + "₪"


console.log(window.localStorage.getItem('cart'))

function dollarexchange() {

    var settings = {
        "url": "http://localhost:3001/exchange",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "value": total_price
        }),
    };

    $.ajax(settings).done(function (response) {
        document.getElementById('total').innerHTML = ""
        document.getElementById('total').innerHTML = response + "$"
    });
}