/*
============================================
; Title: float-field-max.js
; Author: Shay McKee
; Date: 9/17/2022
; Description: Float max field script
;===========================================
*/

// Float-max-field class
export class FloatMaxField
{
    constructor(name, field, max)
        {
            this.name = name;
            this.field = field;
            this.max = max;
        }
    
    // Validates the maximum amount for any field it's applied to.
    validate() 
    {
        let floatField = parseFloat(this.field);
        return (floatField < this.max);
    }

    // If the field is over this max, then the following messages displays.
    getMessage()
    {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}