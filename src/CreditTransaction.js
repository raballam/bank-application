import Transaction from "../src/Transaction.js";

// This is pretty pointless but when I started doing it I thought I
// was going to find a better way of doing printTransaction but I didn't
// and then I'd already done it so I left it. 
export default class CreditTransaction extends Transaction {
    constructor(amount, balance, date) {
        super(amount, balance, date);
        this.credit = amount;
    };
    credit;
    getCredit() {
        return this.credit;
    };
};