export default class Transaction {
    constructor(type, amount) {
        this.#type = type;
        this.#amount = amount;
    }
    #type;
    #amount;
    getType() {
        return this.#type;
    }
    getAmount() {
        return this.#amount;
    }
};