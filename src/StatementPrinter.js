export default class StatementPrinter {
    static printStatement = (account) => {
        console.log("Account Statement");
        console.log("===========================================");
        account.printAccountDetails();
        console.log("===========================================");
        console.log(`${"date".padEnd(10)} || ${"credit".padEnd(7)} || ${"debit".padEnd(7)} || balance`);
        for (const transaction of account.transactions) {
            transaction.printTransaction();
        }
        console.log();
    }
}