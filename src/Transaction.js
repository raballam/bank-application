export default class Transaction {
    constructor(type, amount, balance) {
        this.#type = type;
        this.#amount = amount;
        this.#balance = balance;
    }
    #type;
    #amount;
    #balance;
    getType() {
        return this.#type;
    }
    getAmount() {
        return this.#amount;
    }
    getBalance() {
        return this.#balance;
    }
};