
var cart = window.localStorage.getItem('cart').split('|')
document.getElementsByClassName("shopping-bag")[0].innerHTML = cart
for (var i = 0; i < cart.length; i++) {
    $(".shopping-bag").append('<div class="product"></div>');
};

var boxElts = document.getElementsByClassName("product");

for (let i = 0; i < cart.length; i++) {
    var current_product = cart[i].split('&')
    boxElts[i].innerHTML = "<img src='" + current_product[2] + "' alt='image'>";
}

console.log(window.localStorage.getItem('cart'))