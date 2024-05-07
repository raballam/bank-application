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
    debit;
    credit;

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
    getDebit() {
        return this.debit;
    }
    getCredit() {
        return this.credit;
    }
    printTransaction = () => {
        let date = this.getDate();
        let credit = this.getCredit() ? this.getCredit().toFixed(2) : '';
        let debit = this.getDebit() ? this.getDebit().toFixed(2) : '';
        let balance = this.getBalance().toFixed(2);
        console.log(`${date.padEnd(10)} || ${chalk.green(credit.padStart(7))} || ${chalk.red(debit.padStart(7))} || ${balance < 0 ? chalk.red(balance.padStart(7)) : chalk.green(balance.padStart(7))}`);
    };
};