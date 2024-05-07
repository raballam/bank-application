import Account from "./Account.js";
import Printer from "./Printer.js";

const account = new Account("Sporty Spice");
let date1 = "10/01/2012";
let date2 = "13/01/2012";
let date3 = "14/01/2012";
let firstDeposit = 1000;
let secondDeposit = 2000;
let firstWithdrawal = 500;
let secondWithdrawal = 3000;

account.deposit(firstDeposit, date1);
account.deposit(secondDeposit, date2);
account.withdraw(firstWithdrawal, date3);

Printer.printAccount(account);

Printer.printStatement(account);

let limit = 1500;
account.enableOverdraft();
account.setOverdraft(limit);
console.log("\n\nProcessing overdraft application............");
console.log("Overdraft application successful!\n\n");

Printer.printWithdrawal(2000, "16/01/2012", account);
Printer.printDeposit(300, '17/01/2012', account);
Printer.printWithdrawal(1200, '20/01/2012', account);
Printer.printDeposit(500, "23/01/2012", account);
Printer.printWithdrawal(2000, "25/01/2012", account);

console.log("\nGenerating account details............\n");
Printer.printAccount(account);
console.log("\nGenerating account statement............\n");
Printer.printStatement(account);
