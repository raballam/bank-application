export default class DebitTransaction extends Transaction {
    constructor(amount, balance, date) {
        super(amount, balance, date);
        // this.#debit = amount;
    }
}