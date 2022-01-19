// funkcija, kuri skaiciuoja uzdirbtu pinigu kieki (kiek suprekiauta)
const IsValid = require("./IsValid.js");
function profit(List){
    let totalProfit =0;
    for(const goods of List){
        totalProfit += goods.sold * goods.price.value;
    }
    return totalProfit
}





module.exports = profit;