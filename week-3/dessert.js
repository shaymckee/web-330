/*
===========================================
; File: dessert.js
; Author: Shay McKee
; Date: 08/27/22
; Description: Dessert JS file for week-3 assignment
===========================================
*/  
import { Product } from "./product.js";

export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}