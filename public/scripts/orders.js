
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
            console.log(id)
            var settings2 = {
                "url": "http://localhost:3001/order/" + response[id]['_id'],
                "method": "GET",
                "timeout": 0,
            };
            $.ajax(settings2).done(function (response1) {
                $(".shopping-bag").append('<tr><th scope="row">' + response1['_id'] + '</td><td>' + response1['username'] + '</td><td>' + response1['date'] + '</td><td></th></tr>');
            })

            // document.getElementsByClassName('users_list')[0].innerHTML += "<li> " + response[id]['_id'] + '<\li>'
        }
    });
    // document.getElementsByClassName('notpresent')[0].style = 'display:block'
    // document.getElementsByClassName('present')[0].style = 'display:none;'
}

function removeuserlist() {
    document.getElementsByClassName('users_list')[0].innerHTML = ""
    document.getElementsByClassName('notpresent')[0].style = 'display:none'
    document.getElementsByClassName('present')[0].style = 'display:block;'

}
function deleteuser() {
    let username = document.getElementsByName('username')[0].value
    let url = "http://localhost:3001/order/" + username

    $.ajax({
        url: url,
        type: 'POST',
        success: function (res) {
            // alert(JSON.stringify(res));
        },
        error: function () {
            alert("order does not exist")
        }
    });

}

function openFormedit() {
    var username = document.getElementsByName('username_edit')[0].value
    let url = "http://localhost:3001/users/" + username
    document.getElementsByName('name')[0].value = username
    document.getElementsByClassName("form-popup")[0].style.display = "block"
    $.ajax({
        url: url
    }).done(function (res) {
        console.log(res)
        document.getElementsByName('address')[0].value = res['Address']
        document.getElementsByName('phonenumber')[0].value = res['phonenumber']
    })


}
function edititem() {
    let username = document.getElementsByName('username_edit')[0].value
    let new_username = document.getElementsByName('name')[0].value
    let new_address = document.getElementsByName('address')[0].value
    let new_phone = document.getElementsByName('phonenumber')[0].value
    let url = "http://localhost:3001/users/" + username

    $.ajax({
        url: url,
        type: 'GET',
        success: function (res) {
            // alert(JSON.stringify(res));
        },
        error: function () {
            alert("user does not exist")
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
            "Address": new_address,
            "phonenumber": new_phone,
            "_id": new_username
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}
function closeFormedit() {
    document.getElementsByClassName("form-popup")[0].style.display = "none"
}