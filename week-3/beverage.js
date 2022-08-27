/*
===========================================
; File: beverage.js
; Author: Shay McKee
; Date: 08/27/22
; Description: Beverage JS file for week-3 assignment
===========================================
*/  
import { Product } from "./product.js";

export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}