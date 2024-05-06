import Transaction from "./Transaction.js";
export default class Account {
    constructor(name) {
        if (name === null) throw new Error("Name cannot be null");
        this.name = name;
    };

    #balance = 0;
    transactions = [];

    getBalance() {
        return this.#balance;
    };

    deposit(funds, date) {
        if (funds < 0) throw new Error("Cannot deposit negative funds");
        this.#balance += funds;
        this.transactions.unshift(new Transaction('debit', funds, this.#balance, date));
    };

    withdraw(funds, date) {
        if (funds < 0) throw new Error("Cannot withdraw negative funds");
        if (funds > this.#balance) throw new Error("Insufficient funds")
        this.#balance -= funds;
        this.transactions.unshift(new Transaction('credit', funds, this.#balance, date));
    };
 };