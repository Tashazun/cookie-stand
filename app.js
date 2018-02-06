'use strict'

const airport = {
    minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 65) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 6.3) + 1 + this.customerGen();
    },
    total: []
};
console.log('Number of customers at PDX Airport: ' + airport.customerGen(), 'Number of cookies purchased: ' + airport.customerPurchase());


function totalCookie() {
for (let i = 0; i < 15; i++) {
     airport.total.push(airport.customerPurchase());
    }
};

totalCookie();
console.log(airport.total);

const sum = airport.total.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);

// const pioneerSquare = {
//     minHourly: 3,
//     maxHourly: 24,
//     cookiePer: 1.2,
//     customerGen: function() {
//         return Math.floor(this.minHourly) + Math.floor(Math.random() * 24) + 1;
//     },
//     customerPurchase: function() {
//         return Math.floor(Math.random() * 1.2) + 1 + pioneerSquare.customerGen();
//     },
//     total: []
// };
// console.log('Number of customers at Pionner Square: ' + pioneerSquare.customerGen(), 'Number of cookies purchased: ' + pioneerSquare.customerPurchase());

// function totalCookie1() {
//     for (let i = 0; i < 15; i++) {
//          pioneerSquare.total.push(pioneerSquare.customerPurchase());
//         }
//     };
    
//     totalCookie1();
//     console.log(pioneerSquare.total);

// const powell = {
//     minHourly: 11,
//     maxHourly: 38,
//     cookiePer: 3.7,
//     customerGen: function() {
//         return Math.floor(this.minHourly) + Math.floor(Math.random() * 38) + 1;
//     },
//     customerPurchase: function() {
//         return Math.floor(Math.random() * 3.7) + 1 + powell.customerGen();
//     },
//     total: []
// };
// console.log('Number of customers at Powell\'s: ' + powell.customerGen(), 'Number of cookies purchased: ' + powell.customerPurchase());

// function totalCookie2() {
//     for (let i = 0; i < 15; i++) {
//          powell.total.push(powell.customerPurchase());
//         }
//     };
    
//     totalCookie2();
//     console.log(powell.total);

// const john = {
//     minHourly: 20,
//     maxHourly: 38,
//     cookiePer: 2.3,
//     customerGen: function() {
//         return Math.floor(this.minHourly) + Math.floor(Math.random() * 38) + 1;
//     },
//     customerPurchase: function() {
//         return Math.floor(Math.random() * 2.3) + 1 + john.customerGen();
//     },
//     total: []
// };
// console.log('Number of customers at St.John: ' + john.customerGen(), 'Number of cookies purchased: ' + john.customerPurchase());

// function totalCookie3() {
//     for (let i = 0; i < 15; i++) {
//          john.total.push(john.customerPurchase());
//         }
//     };
    
//     totalCookie3();
//     console.log(john.total);

// const waterfront = {
//     minHourly: 2,
//     maxHourly: 16,
//     cookiePer: 4.6,
//     customerGen: function() {
//         return Math.floor(this.minHourly) + Math.floor(Math.random() * 16) + 1;
//     },
//     customerPurchase: function() {
//         return Math.floor(Math.random() * 4.6) + 1 + waterfront.customerGen();
//     },
//     total: []
// };
// console.log('Number of customers at the Waterfront: ' + waterfront.customerGen(), 'Number of cookies purchased: ' + waterfront.customerPurchase());

// function totalCookie4() {
//     for (let i = 0; i < 15; i++) {
//          waterfront.total.push(waterfront.customerPurchase());
//         }
//     };
    
//     totalCookie4();
//     console.log(waterfront.total);