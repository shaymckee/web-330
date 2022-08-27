/*
===========================================
; File: appetizer.js
; Author: Shay McKee
; Date: 08/27/22
; Description: Appetizer JS file for week-3 assignment
===========================================
*/ 

import { Product } from "./product.js";

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}