import Transaction from "../src/Transaction.js";

export default class CreditTransaction extends Transaction {
    constructor(amount, balance, date) {
        super(amount, balance, date);
        this.credit = amount;
    }
    credit;
    getCredit() {
        return this.credit;
    }
}