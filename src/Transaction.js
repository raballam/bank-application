export default class Transaction {
    constructor(type, amount, balance, date) {
        this.#type = type;
        this.#amount = amount;
        this.#balance = balance;
        this.#date = date;
        if (type === 'debit') this.#debit = amount;
        if (type === 'credit') this.#credit = amount;
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
    printTransaction = () => {
        console.log(`${this.#date.padEnd(10)} || ${this.#credit ? this.#credit.toFixed(2).padStart(7) : ''.padEnd(7)} || ${this.#debit ? this.#debit.toFixed(2).padStart(7) : ''.padEnd(7)} || ${this.#balance.toFixed(2).padStart(7)}`);
    };
};