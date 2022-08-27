/*
===========================================
; File: main-course.js
; Author: Shay McKee
; Date: 08/27/22
; Description: Main-Course JS file for week-3 assignment
===========================================
*/  
import { Product } from "./product.js";

export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}