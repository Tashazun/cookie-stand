'use strict'

const airport = {
    minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 65) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 6.3) + 1 + airport.customerGen();
    },
};
console.log('Number of customers at PDX Airport: ' + airport.customerGen(), 'Number of cookies purchased: ' + airport.customerPurchase());

const pioneerSquare = {
    minHourly: 3,
    maxHourly: 24,
    cookiePer: 1.2,
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 24) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 1.2) + 1 + pioneerSquare.customerGen();
    },
};
console.log('Number of customers at Pionner Square: ' + pioneerSquare.customerGen(), 'Number of cookies purchased: ' + pioneerSquare.customerPurchase());

const powell = {
    minHourly: 11,
    maxHourly: 38,
    cookiePer: 3.7,
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 38) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 3.7) + 1 + powell.customerGen();
    },
};
console.log('Number of customers at Powell\'s: ' + powell.customerGen(), 'Number of cookies purchased: ' + powell.customerPurchase());

const john = {
    minHourly: 20,
    maxHourly: 38,
    cookiePer: 2.3,
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 38) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 2.3) + 1 + john.customerGen();
    },
};
console.log('Number of customers at St.John: ' + john.customerGen(), 'Number of cookies purchased: ' + john.customerPurchase());

const waterfront = {
    minHourly: 2,
    maxHourly: 16,
    cookiePer: 4.6,
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 16) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 4.6) + 1 + waterfront.customerGen();
    },
};
console.log('Number of customers at the Waterfront: ' + waterfront.customerGen(), 'Number of cookies purchased: ' + waterfront.customerPurchase());

