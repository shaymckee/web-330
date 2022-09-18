/*
============================================
; Title: finance-calculator.js
; Author: Shay McKee
; Date: 9/17/2022
; Description: Script for Finance Calculator 
;===========================================
*/

// Finance Calculator class
export class FinanceCalculator 
{

    static MONTHS_IN_YEAR = 12;

    // Calculates future value of user entered numbers
    static calculateFutureValue(monthlyPayment, rate, years)
    {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));

        // Return future value of item to the 2nd decimal place
        return futureValue.toFixed(2);
    }

    // Converts the number to a US dollar amount
    static convertToCurrency(field)
    {
        let currencyFormatter = new Intl.NumberFormat('en-US', 
        { 
            style: 'currency',
            currency: 'USD' 
        });
        return currencyFormatter.format(field);
    }
}