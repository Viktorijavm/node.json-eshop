// funkcija, kuri skaiciuoja visu parduotu prekiu kieki


function soldTotalCount(List){
        
    let totalSold = 0;
for(const goods of List){
    totalSold += goods.sold;
}
return totalSold;
}
      



module.exports = soldTotalCount;