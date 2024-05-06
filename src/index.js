import Account from "./Account.js";
import StatementPrinter from "./StatementPrinter.js";

const account = new Account("Tilly Mallabar");
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

