var cartForTable = window.localStorage.getItem('cart').split('|')
var total_price = 0;
var products = []
for (var i = 0; i < cartForTable.length; i++) {
    var product = cartForTable[i].split('&')
    total_price += parseInt(product[1]);
    $(".shopping-bag").append('<tr><th scope="row">'+(i+1)+'</th><td>'+product[3]+'</td><td>'+product[1]+' ₪'+'</td><td><img src='+product[2]+' border=3 height=90 width=90></img></th></tr>');
    products.push(product[0])
};
console.log(products)

$(".products").append('<input name="products" type="text" class="products" value="'+products+'">')

var total = document.getElementById("total");
total.innerHTML = total_price + "₪"


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
        document.getElementById('totalDollar').innerHTML = response + "$"
    });
}