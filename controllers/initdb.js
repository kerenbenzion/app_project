const res = require("express/lib/response");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Product = require("../models/Product");

async function initdb(req, res) {
    await Product.deleteMany({})
    createProduct('120', 'עגילי פרפר', ['gold'], 'https://giolli.co.il/wp-content/uploads/2020/05/5143.jpg', 'https://giolli.co.il/wp-content/uploads/2020/09/E11871G-1.jpg', 'earrings', 'עגילים יפייפים בצורת פרפר', ['S', 'M', 'L'])
    createProduct('125', 'עגילי חישוק פרפר', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/butterfly_earrings.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/08/35.jpg', 'earrings', 'עגילי חישוק מהממים', ['S', 'M', 'L'])
    createProduct('200', 'עגילי גולייט', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/01/milan-earrings-set-silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/10/juliat-600x600.jpg', 'earrings', 'סט עגילים ג’ולייט הוא סט היסטרי המורכב מחמישה עגילים שונים בשילוב פנינים טבעיות שמשדרגות כל הופעה!', ['S', 'M', 'L'])
    createProduct('70', 'עגילי בל', ['gold', 'silver'], 'https://cdn.shopify.com/s/files/1/0274/9864/3559/products/2250454bf72d62932b5e0ed936f7ec38_600x.jpg?v=1635748473', 'https://cdn.shopify.com/s/files/1/0274/9864/3559/products/373878a19c7c0c745f5c32f22766ae43_1000x.jpg?v=1635748483', 'earrings', 'העגיל בעיצוב כתר קטנטן ועדין המשובץ שלושה זירקונים', ['S', 'M', 'L'])
    createProduct('350', 'עגילי כסף 925', ['silver'], 'https://cdn.shopify.com/s/files/1/1900/7095/products/45727-aditagold-earrings-main-collection---cl-silver-white-opal-8-cabochon-round--45727-1_1800x1800.jpg?v=1648030919', 'https://cdn.shopify.com/s/files/1/1900/7095/products/45727-aditagold-earrings-main-collection---cl-silver-white-opal-8-cabochon-round--45727_900x.jpg?v=1648030921', 'earrings', 'עגילי כסף 925 עגולים תלויים משובצים אופל לבן מבית עדיתא גולד', ['S', 'M'])
    createProduct('350', 'עגילי כסף 925', ['silver'], 'https://cdn.shopify.com/s/files/1/1900/7095/products/45727-aditagold-earrings-main-collection---cl-silver-white-opal-8-cabochon-round--45727-1_1800x1800.jpg?v=1648030919', 'https://cdn.shopify.com/s/files/1/1900/7095/products/45727-aditagold-earrings-main-collection---cl-silver-white-opal-8-cabochon-round--45727_900x.jpg?v=1648030921', 'earrings', 'עגילי כסף 925 עגולים תלויים משובצים אופל לבן מבית עדיתא גולד', ['S', 'M'])
    res.send('updated')
}


function createProduct(price, name, color, preview_img, hover_img, type, description, size) {
    const product = new Product({
        price: price,
        name: name,
        color: color,
        preview_img: preview_img,
        hover_img: hover_img,
        type: type,
        description: description,
        size: size
    });
    product.save()
}
module.exports = {
    initdb,
}