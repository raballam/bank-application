import chalk from 'chalk';
export default class Transaction {
    constructor( amount, balance, date) {
        // this.#type = type;
        this.#amount = amount;
        this.#balance = balance;
        this.#date = date;
        // if (type === 'debit') this.#debit = amount;
        // if (type === 'credit') this.#credit = amount;
    }
    // #type;
    #amount;
    #balance;
    #date;
    // #debit;
    // #credit;

    // getType() {
    //     return this.#type;
    // }
    getAmount() {
        return this.#amount;
    }
    getBalance() {
        return this.#balance;
    }
    getDate() {
        return this.#date;
    }
    // getDebit() {
    //     return this.#debit;
    // }
    // getCredit() {
    //     return this.#credit;
    // }
    printTransaction = () => {
        console.log(`${this.getDate().padEnd(10)} || ${this.getCredit() ? chalk.green(this.getCredit().toFixed(2).padStart(7)) : ''.padEnd(7)} || ${this.getDebit() ? chalk.red(this.getDebit().toFixed(2).padStart(7)) : ''.padEnd(7)} || ${this.getBalance() < 0 ? chalk.red(this.getBalance().toFixed(2).padStart(7)) : chalk.green(this.getBalance().toFixed(2).padStart(7))}`);
    };
};