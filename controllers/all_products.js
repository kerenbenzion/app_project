const Product = require("../models/Product");
function form(req,res){
    Product.find({}).then(results=>{
        res.render('../views/all_products',{products:results} );
    })
    
}
function add_product(req,req){
    const product = new Product({
        price: '125',
        color :"black",
        preview_img: "",
        hover_img: "",
        description: "blaa",
        size:"onesize",
    });
    product.save()
}
function get_products(req,req){
    Product.find().then(results => {
        res.json(results)
    });
}
module.exports={
    form,
    add_product
}