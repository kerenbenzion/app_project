
function presentuserlist() {
    var settings = {
        "url": "http://localhost:3001/users/getusers",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        document.getElementsByClassName('users_list')[0].innerHTML = ''
        for (var id in response) {
            document.getElementsByClassName('users_list')[0].innerHTML += response[id]['_id'] + '\n'
        }
    });
}

function deleteuser() {
    let username = document.getElementsByName('username')[0].value
    let url = "http://localhost:3001/users/" + username

    $.ajax({
        url: url,
        type: 'POST',
        success: function (res) {
            // alert(JSON.stringify(res));
        },
        error: function () {
            alert("user does not exist")
        }
    });

}