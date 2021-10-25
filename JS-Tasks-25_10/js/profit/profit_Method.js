class Profit {
    constructor(costprice, sellprice, invNum) {
        this.costPrice = costprice;
        this.sellprice = sellprice;
        this.inventory = invNum
    }
    calcProf() {
        return `Profit is: ${Math.round((this.sellprice-this.costPrice)*this.inventory)}`;
    }
}

let p1 = new Profit(32.67, 45.00, 1200);
console.log(p1.calcProf());