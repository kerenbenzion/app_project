const axios = require('axios')

function publishPost(msg){
    const pageId='107964865443633'
    const access_token = 'EABSw5NTZAolgBAKVP8wK7G7Xd4F3fR7PmKHMmiYgpdGnZCXPB1nzRUKW6joZAZAZBAqcp53UAtB6eoS0hE7PDSOQhPGGkUvjqnXSZB8eH8frTb4gcyQukhgpCZBKC5XMVyfYoPKFTezN4TvOq2NZAZC8WZAPjG8gME8F5YYdE2cGnGMWN1ZAZBk7TanDuNGBOjMbIvVP4sejaF8fL1gzhUjfiTee'
    axios.post(`https://graph.facebook.com/${pageId}/feed?message=${msg}&access_token=${access_token}`, null)
    .then(function (response){
        console.log(response)
    })
    .catch(function (error){
        console.log(error)
    });
    return "Done"

}
module.exports = {publishPost}