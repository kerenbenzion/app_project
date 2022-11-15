function additem() {
    var urlCall = "/products/add_product/"
    var description = document.getElementsByName('description')[0].value
    var name = document.getElementsByName('name')[0].value
    var type = document.getElementsByName('type')[0].value
    var price = document.getElementsByName('price')[0].value
    var preview_img = document.getElementsByName('preview_img')[0].value
    var hover_img = document.getElementsByName('hover_img')[0].value
    var size = []
    var color = []
    $("input:checkbox[name=category]:checked").each(function () {
        size.push($(this).val());
    });
    $("input:checkbox[name=color]:checked").each(function () {
        color.push($(this).val());
    });
    if (isNaN(price)) {
        alert("בשדה מחיר לא שמת מספר")
    } else if (type != 'earrings' && type != 'bracelets' && type != 'necklaces' && type != 'rings') {
        alert("בשדה סוג לא שמת סוג מתאים.")
    } else if (size.length === 0) {
        alert("לא בחרת מידה, צריך לבחור מידה אחת לפחות")
    } else if (color.length === 0) {
        alert("יש לבחור צבע אחד לפחות")
    } else if (hover_img == null) {
        alert("לא הכנסת תמונה לתצוגה נוספת")
    } else if (preview_img == null) {
        alert("לא הכנסת תמונה לתצוגה ")
    } else if (description == null) {
        alert("לא הכנסת תיאור")
    } else {
        var settings = {
            "url": urlCall,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "price": price,
                "name": name,
                "color": color,
                "preview_img": preview_img,
                "hover_img": hover_img,
                "description": description,
                "size": size,
                "type": type
            }),
        };

        $.ajax(settings).done(function (response) {
            alert('המוצר התווסף בהצלחה')
            window.href = "/products"
        });
    }


}