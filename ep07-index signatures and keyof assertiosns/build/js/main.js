"use strict";
//index signature
// interface TransactionObj {
//   pizza: number;
//   books: number;
//   job: number;
// }
const todaysTransaction = {
    pizza: -10,
    books: -5,
    job: 50,
};
console.log(todaysTransaction.pizza);
console.log(todaysTransaction["pizza"]);
let prop = "pizza";
//can't do this
todaysTransaction[prop];
//for loops also
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
