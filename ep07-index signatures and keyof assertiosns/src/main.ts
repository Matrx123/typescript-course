//index signature
// interface TransactionObj {
//   pizza: number;
//   books: number;
//   job: number;
// }

//fix by providing signatures
interface TransactionObj {
  //can't be boolean, can be made readonly by using keyword readonly
  [index: string]: number;
}

const todaysTransaction: TransactionObj = {
  pizza: -10,
  books: -5,
  job: 50,
};
console.log(todaysTransaction.pizza);
console.log(todaysTransaction["pizza"]);

let prop: string = "pizza";
//can't do this
todaysTransaction[prop];
//for loops also
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransaction));
//not entirely safe
// console.log(todaysTransaction['Dave']) => returns undefined

//can also be done, but pizza, books and job are required
interface newInterface {
  //index signature
  readonly [index: string]: number;
  pizza: number;
  books: number;
  job: number;
}
/////////////////////////////////////////////////////////////
//we can use keyof assertion if index signature is not present to loop through an object
/////////////////////////////////////////////////////////////

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
