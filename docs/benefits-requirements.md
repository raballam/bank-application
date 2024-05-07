# Console Banking Application

The primary aim of this  banking application is to provide users with a convenient and efficient way to manage their finances, directly from their terminal. By offering a range of features, the application aims to streamline banking operations and enhance the overall user experience.

## Benefits

This software allows users to easily withdraw and deposit funds and access information about their account. It has the following features:

- **Access Account**
Users see their account information upon startup, so can easily find information such as their account number and available balance. This allows the user to efficiently monitor their spending and manage their budget.
- **Deposit Funds**
The application allows users to deposit funds into their account. By entering the desired amount, users can quickly and securely add money to their balance, ensuring their funds are readily available whenever needed.
- **Withdraw Funds** Users can withdraw funds from their account, provided they have a sufficient balance. This allows users to spend their money as they choose, without having to visit a bank or wait for the request to be processed.
- **Print Account Statement**
The application generates and prints an account statement for users, displaying essential details such as transaction date, amount, and current balance. To enhance readability and user experience, the statement's output is formatted to display credits and positive balances in green text, while debits and negative balances appear in red text.
- **Overdraft Facility**
Users have the option to enable an overdraft facility for their account, allowing them to withdraw funds beyond their available balance up to the configured overdraft limit. This feature provides users with added flexibility and financial security, ensuring they can access additional funds when needed.

By incorporating these features, this banking application empowers users with greater control over their finances while prioritizing convenience, security, and flexibility. Whether managing daily expenses or planning for future financial goals, users can rely on the application to deliver a seamless banking experience tailored to their needs.

## Risks
- **User Error in Configuration**
Since users have the ability to configure overdraft limits and other account settings, there is a risk of human error leading to incorrect configuration. This could result in unintended consequences such as overdraft misuse or incorrect balance reporting. Implementing safeguards and validation checks can help mitigate this risk.
- **Limited Override Options**
The application lacks a mechanism for personnel to override the system's decision regarding transaction approvals or denials before they are executed. In scenarios where exceptions need to be made based on unique circumstances, this could lead to delays or inconvenience for users. Incorporating a manual override feature could enhance flexibility and adaptability.
- **Insufficient Data Collection**
The application's data collection is limited to basic account information and transaction history. This is not sufficient data to offer personalized services and tailored financial solutions and enhancing data collection capabilities could enable the bank to better understand customer needs and improve service delivery. It may be useful to include information such as the types of purchases, repeat payments and user demographics in order to analyse user spending behaviour.
- **Inadequate Risk Assessment**
The application currently does not consider factors beyond basic account management, such as transaction patterns, suspicious activity detection, or fraud prevention measures. Failure to assess and mitigate risks related to fraudulent activities or security breaches could expose the bank and its customers to financial losses and reputational damage. 

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
