const axios = require('axios')

function publishPost(msg){
    const pageId='107964865443633'
    const access_token = 'EABSw5NTZAolgBAFVDhOvVnQCD9TFWp44ES0NsJWTT8obmOXKmVimFMFxbDrBaWovrKpZAchEFjj5G4ypvSZBEs5FedshZCjfvMigAHD11C7L4ZB0tIkBKpDGma16esZBV49xuVKZADver9ST8wCfInqNBZAQE1CPmoGCwXQC8Ah711gXDQahhAj1O9ZCLcxBHZCK83H1qbyp3ODQZDZD'
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