const res = require("express/lib/response");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Product = require("../models/Product");
const login = require("../services/login");

async function initdb(req, res) {
    await Product.deleteMany({})
    createProduct('120', 'עגילי פרפר', ['gold'], 'https://giolli.co.il/wp-content/uploads/2020/05/5143.jpg', 'https://giolli.co.il/wp-content/uploads/2020/09/E11871G-1.jpg', 'earrings', 'עגילים יפייפים בצורת פרפר', ['S', 'M', 'L'])
    createProduct('125', 'עגילי חישוק פרפר', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/butterfly_earrings.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/08/35.jpg', 'earrings', 'עגילי חישוק מהממים', ['S', 'M', 'L'])
    createProduct('200', 'עגילי גולייט', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/01/milan-earrings-set-silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/10/juliat-600x600.jpg', 'earrings', 'סט עגילים ג’ולייט הוא סט היסטרי המורכב מחמישה עגילים שונים בשילוב פנינים טבעיות שמשדרגות כל הופעה!', ['S', 'M', 'L'])
    createProduct('70', 'עגילי בל', ['gold', 'silver'], 'https://cdn.shopify.com/s/files/1/0274/9864/3559/products/2250454bf72d62932b5e0ed936f7ec38_600x.jpg?v=1635748473', 'https://cdn.shopify.com/s/files/1/0274/9864/3559/products/373878a19c7c0c745f5c32f22766ae43_1000x.jpg?v=1635748483', 'earrings', 'העגיל בעיצוב כתר קטנטן ועדין המשובץ שלושה זירקונים', ['S', 'M', 'L'])
    createProduct('350', 'עגילי כסף 925', ['silver'], 'https://cdn.shopify.com/s/files/1/1900/7095/products/45727-aditagold-earrings-main-collection---cl-silver-white-opal-8-cabochon-round--45727-1_1800x1800.jpg?v=1648030919', 'https://cdn.shopify.com/s/files/1/1900/7095/products/45727-aditagold-earrings-main-collection---cl-silver-white-opal-8-cabochon-round--45727_900x.jpg?v=1648030921', 'earrings', 'עגילי כסף 925 עגולים תלויים משובצים אופל לבן', ['S', 'M'])
    createProduct('350', 'עגילי ריף', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/1-5-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/11-2-600x600.jpg', 'earrings', 'עגילי ריף נוצרו בהשראת טבעת ריף. עגילים קלאסיים ובייסיקיים עם נוכחות וגודל מושלם!', ['S', 'M'])
    createProduct('150', 'עגילי סלינה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/selena_earrings-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/%D7%A2%D7%92%D7%99%D7%9C-%D7%A1%D7%9C%D7%99%D7%A0%D7%94-600x600.jpg', 'earrings', 'עגילי סלינה הם עגילי חישוק עם תליונים ושרשראות באווירת חופים.', ['S', 'M'])
    createProduct('160', 'עגילי מלי', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2021/01/mally-earrings-m-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/06/mali3-600x600.jpg', 'earrings', 'עגילי מלי הם עגילי חישוק עם תליון פנינה מושלמים וסופר מבוקשים!', ['S', 'M'])
    createProduct('150', 'עגילי רוקסט', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/06/%D7%A2%D7%92%D7%99%D7%9C%D7%99-%D7%A8%D7%95%D7%A7%D7%A1%D7%98-%D7%96%D7%94%D7%91-1-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/06/%D7%A2%D7%92%D7%99%D7%9C%D7%99-%D7%A8%D7%95%D7%A7%D7%A1%D7%98-%D7%9B%D7%A1%D7%A3-1-600x600.jpg', 'earrings', 'עגילי רוקסט הם עגילי חישוק בצורת משושה ומשובצים בקריסטלים עדינים.', ['S', 'M'])
    createProduct('60', 'עגילי קריס', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/12/%D7%A7%D7%A8%D7%99%D7%A1-%D7%9B%D7%A1%D7%A3-600x600.png', 'https://shanijacobi.co.il/wp-content/uploads/2021/12/%D7%A7%D7%A8%D7%99%D7%A1-600x600.png', 'earrings', 'עגילים עגולים ויפים שיתנו לך מראה זוהר ונוצץ!', ['S', 'M'])

    createProduct('500', 'שרשרת זהב – נוגה', ['gold'], 'https://jackson.co.il/wp-content/uploads/2018/09/%D7%A0%D7%95%D7%92%D7%94%D7%96%D7%94%D7%91.jpg', 'https://jackson.co.il/wp-content/uploads/2018/09/%D7%A8%D7%99%D7%91%D7%95%D7%A2-%D7%A2%D7%9C-%D7%94%D7%92%D7%95%D7%A32-1200x1200.jpg', 'necklaces', 'שרשרת עם תליון זהב 14k זרקון נקודה עם 4 שיניים האוחזות אותו. ', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת ואלרי בייסיק', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2020/07/valery-basic.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/07/royal-valery-basic-necklaces-600x600.jpg', 'necklaces', 'שרשרת ואלרי בייסיק היא שרשרת גורמט טרנדית מושלמת וכזו שלא תרצי להוריד!', ['S', 'M', 'L'])
    createProduct('110', 'שרשרת בר', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2020/03/bar-necklace-silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/03/wildflower-and-bar-600x600.jpg', 'necklaces', 'שרשרת בר במהדורה מוגבלת היא שרשרת עדינה ויפה המשלבת תליון בצורת אליפסה עם חריטה עדינה של פרחי בר מושלמים!', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת מזל דגים ', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%A9%D7%A8%D7%A9%D7%A8%D7%AA-%D7%9E%D7%96%D7%9C-%D7%93%D7%92%D7%99%D7%9D-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%A9%D7%A8%D7%A9%D7%A8%D7%AA-%D7%9E%D7%96%D7%9C-%D7%93%D7%92%D7%99%D7%9D-%D7%90%D7%97%D7%95%D7%A8%D7%94-600x600.jpg', 'necklaces', 'שרשרת מזל דגים היא שרשרת עדינה ומהממת המשלבת תליון עם חריטה של מזל דגים ומסביבו שלושה כוכבים קטנים ויפים!', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת מזל דלי', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%93%D7%9C%D7%99-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2019/07/%D7%93%D7%9C%D7%99-%D7%90%D7%97%D7%95%D7%A8%D7%94-600x600.jpg', 'necklaces', 'שרשרת מזל דלי היא שרשרת עדינה ומהממת המשלבת תליון עם חריטה של מזל דלי ומסביבו שלושה כוכבים קטנים ויפים!', ['S', 'M', 'L'])
    createProduct('125', 'שרשרת גאלה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/1-6-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/11-3-600x600.jpg', 'necklaces', 'שרשרת גאלה היא שרשרת גורמט עדינה בשילוב פנינה עם נוכחות, שנותנת טוויסט ומקפיצה את כל הלוק.', ['S', 'M', 'L'])
    createProduct('120', 'שרשרת ריי', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/ray_necklace-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/08/ray_necklace_silver-600x600.jpg', 'necklaces', 'שרשרת ריי היא שרשרת שכבות שמורכבת משתי שרשראות שונות זו מזו, ועל השרשרת התחתונה תלוי תליון של פנינה וחרוז צבעוני.', ['S', 'M', 'L'])
    createProduct('70', 'שרשרת אות A', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2019/09/letter-a-necklace-gold-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2019/09/letter-necklace-silver-600x600.jpg', 'necklaces', 'שרשרת אות A היא שרשרת עדינה ויפה המשלבת תליון מלבני עם חריטה של האות A ומעליה כוכב עדין ויפה!', ['S', 'M', 'L'])
    createProduct('500', 'שרשרת אלה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/03/ella_necklace_gold-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/03/ella_necklace_silver-600x600.jpg', 'necklaces', 'שרשרת אלה היא שרשרת עם תליון ייחודי ועליו עדינה מאוד של פרח בר יפיפה שציירה המאיירת ואמנית הקעקועים שרה קורי!', ['S', 'M', 'L'])
    createProduct('130', 'שרשרת ג’נר', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2022/04/janer-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/05/IMG_2663-600x600.jpg', 'necklaces', 'שרשרת ג’נר היא שרשרת מדהימה המשלבת שרשרת פנינים ושרשרת גורמט.', ['S', 'M', 'L'])

    createProduct('200', 'צמיד מונקו פרל', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/2-5-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/%D7%A6%D7%9E%D7%99%D7%93-%D7%9E%D7%95%D7%A0%D7%A7%D7%95-%D7%A4%D7%A8%D7%9C-%D7%95%D7%A6%D7%9E%D7%99%D7%93-%D7%91%D7%9C%D7%94-600x600.jpg', 'bracelets', 'צמיד מונקו פרל הוא צמיד המשלב פנינים בגדלים שונים וחרוזי זהב עדינים בצורה מושלמת!מהמם על היד ונראה מעולה בשילוב צמידים נוספים', ['S', 'M'])
    createProduct('100', 'צמיד קוקו פרל', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/pearl_coco_anklet_orange-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/08/pearl_coco_anklet_white-600x600.jpg', 'bracelets', 'צמיד קוקו פרל הוא צמיד לרגל שעשוי חוט משי עם פנינה טבעית. צמיד בייסיקי ועדין שמכניס קצת צבע לכל לוק!', ['S', 'M'])
    createProduct('500', 'צמיד גורמט אלכס', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/03/alex_bracelet_gold-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/03/alex_bracelet_silver.jpg', 'bracelets', 'צמיד גורמט אלכס הוא צמיד חוליות מלא בסטייל והקראש הבא שלך!', ['S', 'M', 'L'])
    createProduct('130', 'צמיד אנוק', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2021/09/anuk-bracelet-gold.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/08/anuk-bracelet-600x600.jpg', 'bracelets', 'צמיד אנוק הוא צמיד שעשוי שרשרת חוליות דקה יחסית למראה מהמם ומלא נוכחות צמיד שהולך עם כל לוק ומשתלב מעולה עם צמידים נוספים', ['S', 'M', 'L'])
    createProduct('110', 'צמיד קנדל', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/04/kendall_bracelet-1-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/05/IMG_7381-600x600.jpg', 'bracelets', 'צמיד קנדל הוא צמיד פנינים מושלם! לצמיד סוגר עם נוכחות שמרים את כל הלוק.', ['S', 'M', 'L'])
    createProduct('130', 'צמיד מילה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/07/mila-bracelet-silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/07/mila-bracelet-600x600.jpg', 'bracelets', 'צמיד מילה (MILA) הוא צמיד עדין ויפה בשילוב קריסטלים', ['S', 'M', 'L'])
    createProduct('80', 'צמיד פורסטר', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2022/01/forster-bracelet-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/01/forster-bracelet-1-600x600.jpg', 'bracelets', 'צמיד פורסטר הוא צמיד דק ומושלם שיהיה התוספת המושלמת לכל לוק!', ['S', 'M'])
    createProduct('150', 'צמיד לילה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/08/lila-bracelet-1-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/08/lila-bracelet-silver-1-600x600.jpg', 'bracelets', 'צמיד לילה הוא צמיד חוליות עם תליון פנינה. צמיד מהמם שנראה מעולה לבד או בשילוב צמידים נוספים למראה עמוס', ['S', 'M'])
    createProduct('160', 'צמיד אמה', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/09/emma_bracelet-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/09/emma_bracelet_silver.jpg', 'bracelets', 'צמיד אמה הוא צמיד חצי/חצי המשלב פנינים מצד אחד ושרשרת עדינה מצד שני.', ['S', 'M'])
    createProduct('100', 'צמיד מולאן', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/01/mulan-bracelet.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/01/mulan-bracelet-silver-600x600.jpg', 'bracelets', 'צמיד מולאן הוא צמיד פנינים עשוי שרשרת דקה שעליה פניני מים מתוקים למראה קלאסי מלא סטייל!', ['S', 'M'])


    createProduct('200', 'טבעת פרל', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2022/03/dylan_ring_silver-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/06/5-4-600x600.jpg', 'rings', 'טבעת פרל היא טבעת מהממת בצורת טיפה משולבת עם פנינה. טבעת ייחודית ומלאת סטייל שגורפת מחמאות!', ['S', 'M'])
    createProduct('100', 'טבעת דילן', ['silver'], 'https://shanijacobi.co.il/wp-content/uploads/2022/08/pearl_coco_anklet_orange-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/02/6-2-600x600.jpg', 'rings', 'טבעת דילן היא טבעת שיקית עם גורמט יחיד למראה מחוספס ועם זאת קלאסי.', ['S', 'M'])
    createProduct('500', 'טבעת גוי', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2022/01/joy-ring-gold-m-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2022/01/rings-600x600.jpg', 'rings', 'עשויה חוט סיליקון גמיש שעליו מושחלות פניני מים מתוקים ללוק ייחודי ומלט סטייל!', ['S', 'M', 'L'])
    createProduct('130', 'טבעת רז', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2021/12/raz_gold-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/12/silver_raz-600x600.jpg', 'rings', 'טבעת מהממת שמשדרגת כל לוק ונותנת מראה יוקרתי ומהמם!', ['S', 'M', 'L'])
    createProduct('110', 'טבעת ריף', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/01/reef-ring-m-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/08/liv_lily_necklaces1-600x600.jpg', 'rings', 'הטבעת פתוחה בחלקה האחורי ומגיעה בשתי מידות. עשוייה מכסף אמיתי 925 ומפליז בציפוי זהב 14 קארט', ['S', 'M'])
    createProduct('130', 'טבעת ספוט', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2020/07/ring-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/07/ring-silver-600x600.jpg', 'rings', 'מומלצת בשילוב עם כמה טבעות יחד או לבד למראה עדין', ['S', 'M', 'L'])
    createProduct('80', 'טבעת נורס', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2021/02/north-ring-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/02/north-ring-silver-600x600.jpg', 'rings', 'טבעת שהיא השילוב המושלם בין קלאסי לבין טרנדי!', ['S', 'M'])
    createProduct('150', 'טבעת פרקר', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2020/05/parker-ring-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2021/01/%D7%A4%D7%A8%D7%A7%D7%A8-%D7%95%D7%92%D7%95%D7%A8%D7%9E%D7%98-%D7%9C%D7%95%D7%A8%D7%99-600x600.jpg', 'rings', 'טבעת פרקר היא טבעת שעשויה מחוליות של גורמט למראה מחוספס ומלא סטייל', ['S', 'M'])
    createProduct('160', 'טבעת מונקי בולס', ['gold', 'silver'], 'https://shanijacobi.co.il/wp-content/uploads/2015/02/monkey-balls-ring-silver-top-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2015/02/monkey-balls-ring-gold-600x600.jpg', 'rings', 'טבעת מונקי בולס – טבעת אורבנית מגניבה, עשויה מפליז בציפוי איכותי של זהב 24 קראט או ציפוי כסף טהור. הטבעת מתכווננת לפי גודל האצבע.', ['S', 'M'])
    createProduct('100', 'טבעת ליה', ['gold'], 'https://shanijacobi.co.il/wp-content/uploads/2020/02/rings-600x600.jpg', 'https://shanijacobi.co.il/wp-content/uploads/2020/02/lya-ring-gold-600x600.jpg', 'rings', 'טבעת ליה היא טבעת בצורת הפטגון (משובע) עם קטע מיוחד של עיטורים. טבעת מושלמת ומלאת סטייל, פתוחה בקצה ומתאימה למגוון רחב של אצבעות.', ['S', 'M'])

    login.register('user1', '1234')
    login.register('user2', '1234')
    login.register('user3', '1234')
    login.register('user4', '1234')
    login.register('user5', '1234')
    login.register('user6', '1234')
    login.register('user7', '1234')
    login.register('user8', '1234')
    login.register('user9', '1234')
    login.register('admin', '1234')

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