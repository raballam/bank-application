The Business Analyst team working with the client has identified the following features that should be implemented:

- A user should should see the output of the application on the terminal:
  - Access an account (assuming each user will automatically have their details loaded into the program on startup)
  - Deposit funds
  - Withdraw funds - if they have sufficient balance to do so
  - Print an account statement (date, amount, balance)
  
  - The output of the statement should be formatted so credits and positive balances appear in green text, debits and negative balances appear in red text
- An overdraft facility can be added to the account, so that if a withdrawal is attempted which would result in a negative balance, the withdrawal is allowed up to the value of the overdraft only
  - This overdraft should be configurable on a per-account basis (i.e. the amount of the overdraft is not fixed across all clients) and only implemented if the account has an overdraft facility enabled

## User Stories

1. As an *account holder*,\
   I want *to be able to access my account*,\
   So that *I can manage my money*.
2. As an *account holder*,\
   I want *to be able to deposit funds*\,
   So that *I can store money in my account*.
3. As an *account holder*,\
   I want *to be able to withdraw funds*,\
   So that *I can spend my money*.
4. As a *bank*,\
   I want to *the account holder to be unable to withdraw funds they don't have*,\
   So that *they only spend their money*.
5. As a *bank*,\
   I want *to record transactions*,\
   So that *the account statement is correct*.
6. As an *account holder*,\
   I want to *be able to print an account statement*,\
   So that *I can see my transactions*.
7. As a *bank*,\
   I want *credits and positive balances to appear in green*,\
   So that *the statement is easy to read*.
8. As a *bank*,\
   I want *debits and negative balances to appear in red*,\
   So that *the statement is easy to read*.
9.  As an *account holder*,\
   I want *to be able to add an overdraft facility*,\
   So that *I can get into debt*.
10. As a *bank*,\
   I want *to be able to configure overdrafts on a per account basis*,\
   So that *clients only spend what they can afford*.
11. As a *bank*,\
    I want *the overdraft facility to only be implemented if it is enabled*,\
    So that *only clients with overdrafts go overdrawn*.
12. As a *bank*,\
    I want *to only allow negative withdrawals up to the overdraft limit*,\
    So that *clients only use the overdraft they're entitled to*.
