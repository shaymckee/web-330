/*
============================================
; Title: Validator.js
; Author: Shay McKee
; Date: 9/17/2022
; Description: Validator script
;===========================================
*/

// Import statements.
import { RequiredField } from "./required-field.js"
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-field-min.js"
import { FloatMaxField } from "./float-field-max.js"

// Validator class.
export class Validator 
{
    // Empty arrays.
    validators = [];
    messages = [];

    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

    // Required field functions will require a field to be filled out properly when attached to a field.
    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() 
    {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // Validates each form field and returns an error message if failed or does nothing if pass.
    validate() 
    {
        for (const validator of this.validators) 
        {
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
            }
        }
        return this.messages.length == 0;
    }
}