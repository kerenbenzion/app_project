const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Product = require("../models/Product");
function form(req,res){
    Product.find({}).then(results=>{
        res.render('../views/all_products',{products:results} );
    })
    
}

function add_product(req,res){
    console.log(req.body);
    var name=req.body.name;
    var price=req.body.price;
    var color=req.body.color;
    var preview_img=req.body.preview_img;
    var hover_img=req.body.hover_img;
    var description=req.body.description;
    var size=req.body.size;
    var type=req.body.type;
    if(size == null || description == null || hover_img==null ||preview_img == null || color==null||price==null||name==null){
        res.status(400).send("You did not enter all the needed parameters :( Please try again")
    }else {
        const product = new Product({
            price: price,
            name: name,
            color:color,
            preview_img: preview_img,
            hover_img:hover_img,
            type:type,
            description: description,
            size: size
        });
        product.save().then(res.status(200).send('success'))
    }
}
function get_products(req, res){
    Product.find().then(results => {
        res.json(results)
    });
}
function getByname (req, res){
    Product.find({
        "name": req.params.name
    })
    .then(results => {
        res.json(results)
    });
}

function deletebyname (req, res){
    Product.findOne({
        "name": req.params.name
    })
    .then(results => {
        Product.findByIdAndDelete(results.id).then(() => res.send('success')).catch(() => res.send('Failure'));
    });
}
function updatebyname(req, res){
    Product.findOne({
        "name": req.params.name
    })
    .then(results => {
        Product.findByIdAndUpdate(results.id,{"name":req.body.name,"price":req.body.price,"description":req.body.description,"color":req.body.color,"type":req.body.type,"size":req.body.size,"preview_img":req.body.preview_img,"hover_img":req.body.hover_img},
        function(err,r){
            if(err){
                res.send(err);
            } else {
                res.send(r);
            }
        })
    });



    // Product.findOne({
    //     "name": req.params.name
    // })
    // .then(results => {
    //     Product.findById(results.id)
    // }).then(product => {
    //     if (product) {
    //         product.size = req.body.size;
    //         product.save();
    //     } else
    //         res.send('No results');
    // })
    // .catch(err => {
    //     res.status(400).json("Error: " + err)
    // });
}
module.exports={
    form,
    add_product,
    get_products,
    getByname,
    deletebyname,
    updatebyname
}