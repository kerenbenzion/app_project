const exchangeService = require("../services/exchange");
const { use } = require("../routes/exchange");
const e = require("express");
const alert = require("alert");

async function exchange(req, res) {
    const value = req.body.value
    var exchange1 = await exchangeService.exchange()
        .then(res => {
            //console.log(res['exchange_rates']['USD']);
            return res['exchange_rates']['USD']
        })
        .catch(err => console.log(err.response))
    var total = (exchange1 * value).toString();
    res.status(200).send(total)

}

function exchangeForm(req, res) {
    res.render("exchange", {})
}

module.exports = {
    exchangeForm,
    exchange
}
