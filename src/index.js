import Account from "./Account.js";
import StatementPrinter from "./Printer.js";

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

StatementPrinter.printStatement(account);

let limit = 1500;
account.enableOverdraft();
account.setOverdraft(limit);
console.log("\n\nProcessing overdraft application............");
console.log("Overdraft application successful!\n\n");

account.withdraw(2000, "16/01/2012");
account.deposit(300, '17/01/2012');
account.withdraw(1200, '20/01/2012');
account.deposit(500, "23/01/2012");

StatementPrinter.printStatement(account);
