function presentuserlist() {
    $(".shopping-bag").innerHTML = ''
    var settings = {
        "url": "http://localhost:3001/order/getorders",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        // document.getElementsByClassName('users_list')[0].innerHTML = ''
        for (var id in response) {
            var settings2 = {
                "url": "http://localhost:3001/order/" + response[id]['_id'],
                "method": "GET",
                "timeout": 0,
            };
            $.ajax(settings2).done(function (response1) {
                $(".shopping-bag").append('<tr><th scope="row">' + response1['_id'] + '</td><td>' + response1['username'] + '</td><td>' + response1['date'] + '</td><td>' + response1['total'] + '</td><td></th></tr>');
            })

            // document.getElementsByClassName('users_list')[0].innerHTML += "<li> " + response[id]['_id'] + '<\li>'
        }
    });
    document.getElementById('orderlist').setAttribute('disabled', 'disabled');
}

function deleteuser() {
    let username = document.getElementsByName('username')[0].value
    let url = "http://localhost:3001/order/" + username
    if (username != null) {
        $.ajax({
            url: url,
            type: 'POST',
            success: function (res) {
                alert("ההזמנה נמחקה בהצלחה")
            },
            error: function () {
                alert("ההזמנה לא קיימת במערכת")
            }
        });
    } else {
        alert('לא כתבת מספר הזמנה')
    }


}

function openFormedit() {
    var username = document.getElementsByName('username_edit')[0].value
    console.log(username)
    let url = "http://localhost:3001/order/" + username
    if (username != null) {
        console.log(url)
        document.getElementsByName('name')[0].value = username
        document.getElementsByClassName("form-popup")[0].style.display = "block"
        $.ajax({
            url: url,
            type: 'GET'
        }).done(function (resu) {
            console.log(resu)
            document.getElementsByName('address')[0].value = resu['total']
        })
    } else {
        alert('לא כתבת מספר הזמנה')
    }

}
function edititem() {
    let id = document.getElementsByName('username_edit')[0].value
    let price = document.getElementsByName('address')[0].value
    let url = "http://localhost:3001/order/" + id
    if (isNaN(price)) {
        alert('שמת מחיר שאינו מספר')
    } else {
        $.ajax({
            url: url,
            type: 'GET',
            success: function (res) {
                // alert(JSON.stringify(res));
            },
            error: function () {
                alert("ההזמנה לא קיימת במערכת")
            }
        });
        var settings = {
            "url": url,
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "total": price,
                "_id": id
            }),
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            alert('ההזמנה נערכה בהצלחה')
        });
        closeFormedit();

    }


}
function closeFormedit() {
    document.getElementsByClassName("form-popup")[0].style.display = "none"
}