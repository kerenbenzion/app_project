const axios = require('axios')
const e = require('express')
const { response } = require('../app')

// function exchange(){
//     const api_key='d0bd5c982eaf492b929f373c10b8848e'
//     const base = 'ILS'
//     const target = 'USD'

//     const data = axios.get(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${api_key}&base=${base}&target=${target}`)
//     .then(res => {
//         console.log(res.data)
//         callback(response.data);
//     })
//     .catch(err=>console.error(err));

//     return data;

// }


async function exchange() {
    return new Promise((resolve, reject) => {
        const api_key='d0bd5c982eaf492b929f373c10b8848e'
        const base = 'ILS'
        const target = 'USD'
        axios
            .get(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${api_key}&base=${base}&target=${target}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => reject(err))
    })
}
module.exports = {exchange}
