function getSingleProduct(req, res) {
    res.render("single-product.ejs", {username: req.session.username});
}

module.exports = { getSingleProduct };