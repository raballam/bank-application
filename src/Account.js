export default class Account {
    constructor(name) {
        if (name === null) throw new Error("Name cannot be null");
        this.name = name;
        
    }
 };