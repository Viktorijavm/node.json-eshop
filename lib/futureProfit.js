// funkcija, kuri apskaiciuoja, uz kiek dar galima suprekiauti is likusiu prekiu
function futureProfit(List){
    let totalProfit =0;
    for(const goods of List){
        totalProfit += goods.inStock * goods.price.value;
    }
    return totalProfit
}



module.exports = futureProfit;