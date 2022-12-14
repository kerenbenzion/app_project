
function presentuserlist() {
    var settings = {
        "url": "http://localhost:3001/users/getusers",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        document.getElementsByClassName('users_list')[0].innerHTML = ''
        for (var id in response) {
            document.getElementsByClassName('users_list')[0].innerHTML += "<li> " + response[id]['_id'] + '<\li>'
        }
    });
    document.getElementsByClassName('notpresent')[0].style = 'display:block'
    document.getElementsByClassName('present')[0].style = 'display:none;'
}

function removeuserlist() {
    document.getElementsByClassName('users_list')[0].innerHTML = ""
    document.getElementsByClassName('notpresent')[0].style = 'display:none'
    document.getElementsByClassName('present')[0].style = 'display:block;'

}
function deleteuser() {
    let username = document.getElementsByName('username')[0].value
    if (username != '') {
        let url = "http://localhost:3001/users/" + username

        $.ajax({
            url: url,
            type: 'POST',
            success: function (res) {
                alert("המשתמש נמחק בהצלחה")
            },
            error: function () {
                alert("המשתמש לא קיים")
            }
        });
    } else {
        alert('לא הכנסת שם משתמש')
    }

}

function openFormedit() {

    var username = document.getElementsByName('username_edit')[0].value
    if (username != '') {
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
    } else {
        alert('לא הכנסת שם משתמש')
    }

}
function edititem() {
    let username = document.getElementsByName('username_edit')[0].value
    let new_username = document.getElementsByName('name')[0].value
    let new_address = document.getElementsByName('address')[0].value
    let new_phone = document.getElementsByName('phonenumber')[0].value

    let check_phone = /^\d+$/.test(new_phone);
    if (check_phone) {
        let url = "http://localhost:3001/users/" + username
        $.ajax({
            url: url,
            type: 'GET',
            success: function (res) {
                // alert(JSON.stringify(res));
            },
            error: function () {
                alert("המשתמש לא קיים")
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
            alert('המשתמש נערך בהצלחה')
        });
        closeFormedit();
    } else {
        alert('הטלפון צריך להכיל רק ספרות')
    }





}
function closeFormedit() {
    document.getElementsByClassName("form-popup")[0].style.display = "none"
}