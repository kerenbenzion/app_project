function presentProductByCategory(category, color, maxPrice){
    window.location.href = "/product-category?category="+category+"&color=" +color+"&maxPrice=" + maxPrice;
}

function openLogin() {
    window.location.href = "/login"
}