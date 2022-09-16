const Product = require("../models/Product");
function form(req,res){
    res.render('../views/all_products')

}
function add_product(req,req){
    const product = new Product({
        price: '120',
        color :"black",
        preview_img: "",
        hover_img: "",
        description: "blaa",
        size:"onesize",
    });
    product.save()
}

module.exports={
    form,
    add_product
}