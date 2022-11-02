const exchangeService = require("../services/exchange");
const { use } = require("../routes/exchange");
const e = require("express");
const alert = require("alert");

async function exchange(req,res){
    const {value} = req.body
    const exchange1 = await exchangeService.exchange()
            .then(res => {
               //console.log(res['exchange_rates']['USD']);
               return res['exchange_rates']['USD']    
         })
        .catch(err => console.log(err.response))

    alert(value*exchange1)
    res.redirect('/login')

}


function exchangeForm(req,res){
    res.render("exchange",{})
}

module.exports={
    exchangeForm,
    exchange
}
