export default class Transaction {
    constructor(type, amount, balance, date) {
        this.#type = type;
        this.#amount = amount;
        this.#balance = balance;
        this.#date = date;
        if (type = 'debit') this.#debit = amount;
        if (type = 'credit') this.#credit = amount;
    }
    #type;
    #amount;
    #balance;
    #date;
    #debit;
    #credit;

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
    getDebit() {
        return this.#debit;
    }
    getCredit() {
        return this.#credit;
    }
};