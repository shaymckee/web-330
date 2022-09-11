/*
============================================
; Title: cart-component.js
; Author: Shay McKee
; Date: 9/11/2021
; Description: Cart-component program for Assignment 5.2
;===========================================
*/

// The CartComponent class adds a web component


 export class CartComponent extends HTMLElement { 
    constructor(){
        super();
    }

        // Adding web component for Shopping Cart icons
        connectedCallback() 
        {
            this.innerHTML = 
                `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
        }
}

customElements.define("cart-component", CartComponent);