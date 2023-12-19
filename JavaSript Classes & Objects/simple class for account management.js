class Account {
    constructor(balance) {
        this.balance = balance;
        console.log("Account created with initial balance of", balance);
    }

    debit(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(amount, "debited");
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.balance; // Return the balance instead of logging it
    }

    credit(amount) {
        this.balance += amount;
        console.log(amount, "credited");
    }
}

const myAccount = new Account(10000); // Creating an account with an initial balance of 10000
console.log(myAccount.getBalance()); // Output: 10000

myAccount.debit(1000); // Output: Insufficient balance
myAccount.credit(1000); // Output: 1000 credited
console.log("Current balance is", myAccount.getBalance()); // Output: Current balance is 11000