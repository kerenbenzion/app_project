function additem() {
    var urlCall = "/products/add_product/"
    var description = document.getElementsByName('description')[0].value
    var size = document.getElementsByName('size')[0].value
    var name = document.getElementsByName('name')[0].value
    var type = document.getElementsByName('type')[0].value
    var price = document.getElementsByName('price')[0].value
    var preview_img = document.getElementsByName('preview_img')[0].value
    var hover_img = document.getElementsByName('hover_img')[0].value
    var color = document.getElementsByName('color')[0].value


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
            "color": color.split(','),
            "preview_img": preview_img,
            "hover_img": hover_img,
            "description": description,
            "size": size.split(','),
            "type": type
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = "/products"
    });
}