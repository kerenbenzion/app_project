const axios = require('axios')
const alert = require('alert')

function publishPost(msg){
    const pageId='107964865443633'
    const access_token = 'EABSw5NTZAolgBAGZCnsvKlh9vHqNnBZAIZBq9ZCbixcYIA7ZC9eenZAWnZAC03lFM5eRcBL9Y0gf8YRhPlLZBe5DvFGfC2jjGKZAMHgordw6f1SsKs7B263PbxydkSLnn8OMl1Fa5t17hjjZB81rZAB2P4oQz29CNSMC7kvbuVMAOrX2XFvFeyRdMSLdmJQuRdQps6xq08ZAaogFdTQZDZD'
    axios.post(`https://graph.facebook.com/${pageId}/feed?message=${msg}&access_token=${access_token}`, null)
    .then(function (response){
        console.log(response)
        alert("הפוסט פורסם בהצלחה")
    })
    .catch(function (error){
        console.log(error)
    });
    return "Done"

}
module.exports = {publishPost}