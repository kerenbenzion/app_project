const Order = require("../models/Order");

function create_order(req,res){
    var products=req.body.products;
    var username = req.body.username;
    if(products == null || username == null){
        res.status(400).send("You did not enter all the needed parameters :( Please try again")
    }else {
        const order = new Order({
            products: products,
            username: username
        });
        order.save().then(res.status(200).send('success'))
    }
}

function get_orders(req, res){
    Order.find().then(results => {
        res.json(results)
    });
}

function deletebyusername (req, res){
    Order.findOne({
        "username": req.params.username
    })
    .then(results => {
        Order.findByIdAndDelete(results.id).then(() => res.send('success')).catch(() => res.send('Failure'));
    });
}
function getByname (req, res){
    Order.find({
        "username": req.params.username
    })
    .then(results => {
        res.json(results)
    });
}


function updatebyid(req, res){
    Product.findByIdAndUpdate(req.params.id,{"username":req.body.username,"products":req.body.products},
        function(err,r){
            if(err){
                res.status(400).send(err);
            } else {
                res.status(200).send(r);
            }
    });
}
module.exports={
    create_order,
    get_orders,
    getByname,
    deletebyusername,
    updatebyid
}