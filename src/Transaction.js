export default class Transaction {
    constructor(type, amount, balance, date) {
        this.#type = type;
        this.#amount = amount;
        this.#balance = balance;
        this.#date = date;
    }
    #type;
    #amount;
    #balance;
    #date;
    getType() {
        return this.#type;
    }
    getAmount() {
        return this.#amount;
    }
    getBalance() {
        return this.#balance;
    }
    getDate() {
        return this.#date;
    }
};