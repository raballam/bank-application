export default class Transaction {
    constructor(type) {
        this.#type = type;
    }
    #type;
    getType() {
        return this.#type;
    }
};