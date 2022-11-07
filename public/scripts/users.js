
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
    var username = document.getElementsByName('username')[0].value
    if (username != null) {
        var urlCall = "/users/deleteuser/" + username
        $.ajax({
            url: urlCall,
            type: 'DELETE',
            success: function (result) {
                window.location.href = "/products";
            }
        });
    }

}