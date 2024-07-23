let signedIn = true
const products = {shoes: 12, oreos: 2, water: 2, candles: 7, pillows: 5}
let cart = {shoes: 12, water: 2}

if (!signedIn) {
    console.log("You Must sign in to view products and check out")
}
else {
    console.log("Here is a list of products!");
    for (const product in products) {
        console.log(`${product}: ${products[product]}`)
    }
}


if (cart){
    
    let total = 0;
    for (let item in cart) {
        total += cart[item];
    }
    console.log(`here is your total: $${total}`);
}
else {
    console.log("Your Cart is Empty!");
}



// TASK 2: FUCNTIONS 

let balance = 66;

function deposit(amount, balance) {
    return balance += amount;
}

function withdrawal(amount, balance) {
    if (balance >= amount) {
        balance -= amount;
        console.log(`You have withdrawn ${amount}, Your remaining balance is ${balance}`);
    }
    else{
        console.log(`You have insuffiecient funds to be making that withdrawal`);
    }
}

function getBalance() {
    return balance;
}

