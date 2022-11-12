const axios = require('axios')
const alert = require('alert')

function publishPost(msg){
    const pageId='107964865443633'
    const access_token = 'EABSw5NTZAolgBAPklXxEy0jqdHuotDdALJzXU4Du4kRdYCEpoSAKZByyjsM33lrqs8kJkRb8Fqv9600QEpfr02F9OZBGL7VJ33KKdd2a0mmebkadZCEBXgEO7xG9ddQvfpJv5dDO3AAsRfS3Mp9GT3F5fY8rDASUEWulkOEesGecbOwbhUzi9mZAuLCuNpPdJsQdW0whcBZAc6RbZCVSVB8'
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