export default class Account {
    constructor(name) {
        if (name === null) throw new Error("Name cannot be null");
        this.name = name;
    };

    #balance = 0;

    getBalance() {
        return this.#balance;
    };

    deposit(funds) {
        if (funds < 0) throw new Error("Cannot deposit negative funds");
        this.#balance += funds;
    }

    withdraw(funds) { 
        this.#balance -= funds;
    }
 };