import Transaction from "./Transaction.js";
export default class Account {
    static accountNumberGen = 12348765;
    constructor(name) {
        if (name === null) throw new Error("Name cannot be null");
        this.name = name;
        this.accountNumber = ++Account.accountNumberGen;

        // Initialize private instance variables
        this.#name = name;
        this.#accountNumber = this.accountNumber;
        this.#balance = 0;
    };
    #name;
    #balance = 0;
    #accountNumber;
    transactions = [];
    overdraftEnabled = false;
    overdraftLimit;

    getName() {
        return this.#name;
    };

    getAccountNumber() {
        return this.#accountNumber;
    };

    getBalance() {
        return this.#balance;
    };

    deposit(funds, date) {
        if (funds < 0) throw new Error("Cannot deposit negative funds");
        this.#balance += funds;
        this.transactions.unshift(new Transaction('credit', funds, this.#balance, date));
    };

    withdraw(funds, date) {
        if (funds < 0) throw new Error("Cannot withdraw negative funds");
        if (!this.overdraftEnabled && funds > this.#balance || this.overdraftEnabled && funds > this.#balance + this.overdraftLimit) {
            throw new Error("Insufficient funds")
        } else {
            this.#balance -= funds;
            this.transactions.unshift(new Transaction('debit', funds, this.#balance, date));
        }
    };

    enableOverdraft() {
        this.overdraftEnabled = true;
    };

    disableOverdraft() {
        this.overdraftEnabled = false;
    };

    setOverdraft(limit) {
        this.overdraftLimit = limit;
    };

    getOverdraftDetails() {
        if (!this.overdraftEnabled) return "N/A";
        return this.overdraftLimit;
    };

    currentAvailable() {
        return this.overdraftEnabled ? this.getBalance() + this.overdraftLimit : this.getBalance();
    };

    printAccountDetails() {
        console.log(`Account Name: ${this.getName()}
        Account Number: ${this.getAccountNumber()}
        Overdraft Limit: £${this.getOverdraftDetails()}
        Available Balance: £${this.currentAvailable()}`);
    };

 };