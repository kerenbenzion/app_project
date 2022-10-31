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

    createProduct('500', 'שרשרת זהב – נוגה', ['gold'], 'https://jackson.co.il/wp-content/uploads/2018/09/%D7%A0%D7%95%D7%92%D7%94%D7%96%D7%94%D7%91.jpg', 'https://jackson.co.il/wp-content/uploads/2018/09/%D7%A8%D7%99%D7%91%D7%95%D7%A2-%D7%A2%D7%9C-%D7%94%D7%92%D7%95%D7%A32-1200x1200.jpg', 'necklaces', 'שרשרת עם תליון זהב 14k זרקון נקודה עם 4 שיניים האוחזות אותו. ', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת ואלרי בייסיק', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2020/07/valery-basic.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/07/royal-valery-basic-necklaces-600x600.jpg', 'necklaces', 'שרשרת ואלרי בייסיק היא שרשרת גורמט טרנדית מושלמת וכזו שלא תרצי להוריד!', ['S', 'M', 'L'])
    createProduct('110', 'שרשרת בר', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2020/03/bar-necklace-silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/03/wildflower-and-bar-600x600.jpg', 'necklaces', 'שרשרת בר במהדורה מוגבלת היא שרשרת עדינה ויפה המשלבת תליון בצורת אליפסה עם חריטה עדינה של פרחי בר מושלמים!', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת מזל דגים ', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%A9%D7%A8%D7%A9%D7%A8%D7%AA-%D7%9E%D7%96%D7%9C-%D7%93%D7%92%D7%99%D7%9D-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%A9%D7%A8%D7%A9%D7%A8%D7%AA-%D7%9E%D7%96%D7%9C-%D7%93%D7%92%D7%99%D7%9D-%D7%90%D7%97%D7%95%D7%A8%D7%94-600x600.jpg', 'necklaces', 'שרשרת מזל דגים היא שרשרת עדינה ומהממת המשלבת תליון עם חריטה של מזל דגים ומסביבו שלושה כוכבים קטנים ויפים!', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת מזל דלי', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%93%D7%9C%D7%99-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%93%D7%9C%D7%99-%D7%90%D7%97%D7%95%D7%A8%D7%94-600x600.jpg', 'necklaces', 'שרשרת מזל דלי היא שרשרת עדינה ומהממת המשלבת תליון עם חריטה של מזל דלי ומסביבו שלושה כוכבים קטנים ויפים!', ['S', 'M', 'L'])
    createProduct('125', 'שרשרת גאלה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/1-6-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/11-3-600x600.jpg', 'necklaces', 'שרשרת גאלה היא שרשרת גורמט עדינה בשילוב פנינה עם נוכחות, שנותנת טוויסט ומקפיצה את כל הלוק.', ['S', 'M', 'L'])
    createProduct('120', 'שרשרת ריי', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/ray_necklace-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/08/ray_necklace_silver-600x600.jpg', 'necklaces', 'שרשרת ריי היא שרשרת שכבות שמורכבת משתי שרשראות שונות זו מזו, ועל השרשרת התחתונה תלוי תליון של פנינה וחרוז צבעוני.', ['S', 'M', 'L'])
    createProduct('70', 'שרשרת אות A', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2019/09/letter-a-necklace-gold-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2019/09/letter-necklace-silver-600x600.jpg', 'necklaces', 'שרשרת אות A היא שרשרת עדינה ויפה המשלבת תליון מלבני עם חריטה של האות A ומעליה כוכב עדין ויפה!', ['S', 'M', 'L'])

    createProduct('200', 'צמיד מונקו פרל', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/2-5-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/%D7%A6%D7%9E%D7%99%D7%93-%D7%9E%D7%95%D7%A0%D7%A7%D7%95-%D7%A4%D7%A8%D7%9C-%D7%95%D7%A6%D7%9E%D7%99%D7%93-%D7%91%D7%9C%D7%94-600x600.jpg', 'bracelets', 'צמיד מונקו פרל הוא צמיד המשלב פנינים בגדלים שונים וחרוזי זהב עדינים בצורה מושלמת!מהמם על היד ונראה מעולה בשילוב צמידים נוספים', ['S', 'M'])
    createProduct('100', 'צמיד קוקו פרל ', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/pearl_coco_anklet_orange-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/08/pearl_coco_anklet_white-600x600.jpg', 'bracelets', 'צמיד קוקו פרל הוא צמיד לרגל שעשוי חוט משי עם פנינה טבעית. צמיד בייסיקי ועדין שמכניס קצת צבע לכל לוק!', ['S', 'M'])
    createProduct('500', 'צמיד גורמט אלכס', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/03/alex_bracelet_gold-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/03/alex_bracelet_silver.jpg', 'bracelets', 'צמיד גורמט אלכס הוא צמיד חוליות מלא בסטייל והקראש הבא שלך!', ['S', 'M', 'L'])
    createProduct('130', 'צמיד אנוק', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2021/09/anuk-bracelet-gold.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/08/anuk-bracelet-600x600.jpg', 'bracelets', 'צמיד אנוק הוא צמיד שעשוי שרשרת חוליות דקה יחסית למראה מהמם ומלא נוכחות צמיד שהולך עם כל לוק ומשתלב מעולה עם צמידים נוספים', ['S', 'M', 'L'])
    createProduct('110', 'צמיד קנדל', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/04/kendall_bracelet-1-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/05/IMG_7381-600x600.jpg', 'bracelets', 'צמיד קנדל הוא צמיד פנינים מושלם! לצמיד סוגר עם נוכחות שמרים את כל הלוק.', ['S', 'M', 'L'])
    createProduct('130', 'צמיד מילה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/07/mila-bracelet-silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/07/mila-bracelet-600x600.jpg', 'bracelets', 'צמיד מילה (MILA) הוא צמיד עדין ויפה בשילוב קריסטלים', ['S', 'M', 'L'])
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