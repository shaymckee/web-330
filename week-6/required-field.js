/*
============================================
; Title: required-field.js
; Author: Shay McKee
; Date: 9/17/2022
; Description: Required field script
;===========================================
*/


// Class for required fields.
export class RequiredField
{
    constructor(name, field)
        {
            this.name = name;
            this.field = field;
        }

    // Returns true if field is a valid string.
    validate() 
    {
        let valid =  Boolean(this.field)
        if (valid){
            valid = Boolean(this.field.trim());
        }
        return valid;
        
    }

    // Called when a name isn't entered.
    getMessage() 
    {
        return this.name + " is a required field."; 
    }
}