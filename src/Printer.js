import chalk from 'chalk';
export default class Printer {
    static printAccount = (account) => {
        console.log(chalk.bold("Account Details:"));
        console.log("===========================================");
        account.printAccountDetails();
        console.log("===========================================\n");
    }
    static printStatement = (account) => {
        console.log(chalk.bold("Account Statement:"));
        console.log("===========================================");
        console.log(`${"date".padEnd(10)} || ${"credit".padEnd(7)} || ${"debit".padEnd(7)} || balance`);
        for (const transaction of account.transactions) {
            transaction.printTransaction();
        }
    }
    static printWithdrawal = (amount, date, account) => {
        try {
            account.withdraw(amount, date);
            console.log(`Withdrawal successful!
        £${amount.toFixed(2)} has been withdrawn from your account.`);
        } catch (error) {
            console.log("Withdrawal unsuccessful:");
            console.error(error.message);
        }
    }
    static printDeposit = (amount, date, account) => {
        try {
            account.deposit(amount, date);
            console.log(`Deposit successful!
        £${amount.toFixed(2)} has been added to your account.`);
        } catch (error) {
            console.log(`Deposit unsuccessful:`);
            console.error(error.message);
        }
    }
}