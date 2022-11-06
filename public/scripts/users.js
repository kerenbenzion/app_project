var settings = {
    "url": "http://localhost:3001/users/getusers",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    // console.log(typeof response)
    document.getElementsByClassName('users_list')[0].innerHTML = ''
    for (var id in response) {
        document.getElementsByClassName('users_list')[0].innerHTML += response[id]['_id'] + '\n'
        // document.getElementsByClassName('users_list')[0].innerHTML += response[i]
    }

});

