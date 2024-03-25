// closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer(params) {
  //   console.log("hello world");
  function inner(params) {
    console.log(`hello there :`);
  }

  return inner;
}
// This is how we can invoke the inner function
outer()();
const value = outer();
console.log(value);
value();

function bank_account(user, initial_balance) {
  let balance = initial_balance;
  function showBalance() {
    console.log(`Hi ${user} your balance is ${balance}`);
  }
  function deposit(money) {
    balance += money;
    showBalance();
  }
  function withdraw(money) {
    if (money > balance) {
      console.log("sorry not enough balance");
    } else {
      balance -= money;
      showBalance();
    }
  }
  return { showBalance, deposit, withdraw };
}
user1 = bank_account("user1", 9000);
user1.showBalance();
user1.deposit(5500);
user1.withdraw(100000);
user1.withdraw(10000);
// so with help of closure we create this system where any user/function  will only have access to the object that is returned
// so if i remove any methods/function from return the user will not be able to use it

// creating a car closure for revision
function car(company, current_price, current_discount) {
  let price = current_price;
  let discount = current_discount;

  function showPrice() {
    console.log(
      `Hi the price for this ${company} car is ${price} with a discount of ${discount} %`
    );
  }
  function increateDiscount(add) {
    discount = discount + add;
    price = price - (price * discount) / 100;
    showPrice();
  }
  function decreaseDicount(remove) {
    discount = discount - remove;
    price = price - (price * discount) / 100;
    showPrice();
  }

  return { showPrice, increateDiscount, decreaseDicount };
}

const car1 = car("hero", 15000, 15);
car1.showPrice();
car1.increateDiscount(50);
car1.decreaseDicount(65);
