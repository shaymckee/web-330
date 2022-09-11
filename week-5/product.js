/*
============================================
; Title: product.js
; Author: Shay McKee
; Date: 9/11/2021
; Description: Product program for Assignment 5.2
;===========================================
*/

// Create and export product class 
export class Product
{
    constructor(name, price)
        {
            this.name = name;
            this.price = price;
            this.id = Math.random().toString(16).slice(2);
        }
}