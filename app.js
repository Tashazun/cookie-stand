'use strict'
// Amount of cookies needed at the PDX Airport
const airport = {
    minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    total: [],
    customerGen: function() {
        return Math.floor(this.minHourly) + Math.floor(Math.random() * 65) + 1;
    },
    customerPurchase: function() {
        return Math.floor(Math.random() * 6.3) + 1 + this.customerGen();
    },
    totalCookie: function() {
        for (let i = 0; i < 15; i++) { 
            this.total.push(this.customerPurchase());
            }
        },
    addList: function() {
        for (let x = 0; x < 15; x++) {       
            const list = document.getElementById('cookieList');
            const li = document.createElement('li');
        } if (x < 4) {  
            li.textContent = x + ' am: ' + this.total[x] + ' cookies';
            list.appendChild(li);
        } else if (x < 4) {
            li.textContent = x + ' pm: ' + this.total[x] + ' cookies';
            list.appendChild(li)
        }
    }    
};
console.log('Number of customers at PDX Airport: ' + airport.customerGen(), 'Number of cookies purchased: ' + airport.customerPurchase());

airport.totalCookie();
console.log(airport.total);

airport.addList();
console.log();

const sum = airport.total.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);


// Amount of cookies needed at Pionner Square
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
    total: []
};
console.log('Number of customers at Pionner Square: ' + pioneerSquare.customerGen(), 'Number of cookies purchased: ' + pioneerSquare.customerPurchase());

function totalCookie1() {
    for (let i = 0; i < 15; i++) {
        pioneerSquare.total.push(pioneerSquare.customerPurchase());
    }
};

totalCookie1();
console.log(pioneerSquare.total);

const sum1 = pioneerSquare.total.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum1);

// Amount of cookies needed at Powell's
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
    total: []
};
console.log('Number of customers at Powell\'s: ' + powell.customerGen(), 'Number of cookies purchased: ' + powell.customerPurchase());

function totalCookie2() {
    for (let i = 0; i < 15; i++) {
         powell.total.push(powell.customerPurchase());
        }
    };
    
    totalCookie2();
    console.log(powell.total);

const sum2 = powell.total.reduce(function (a, b) {
        return a + b;
    }, 0);
console.log(sum2);

// Amount of cookies needed for St. Johns
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
    total: []
};
console.log('Number of customers at St.John: ' + john.customerGen(), 'Number of cookies purchased: ' + john.customerPurchase());

function totalCookie3() {
    for (let i = 0; i < 15; i++) {
         john.total.push(john.customerPurchase());
        }
    };
    
totalCookie3();
console.log(john.total);

const sum3 = john.total.reduce(function (a, b) {
        return a + b;
    }, 0);
console.log(sum3);

// Amount needed for the waterfront
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
    total: []
};
console.log('Number of customers at the Waterfront: ' + waterfront.customerGen(), 'Number of cookies purchased: ' + waterfront.customerPurchase());

function totalCookie4() {
    for (let i = 0; i < 15; i++) {
         waterfront.total.push(waterfront.customerPurchase());
        }
    };
    
totalCookie4();
console.log(waterfront.total);

const sum4 = waterfront.total.reduce(function (a, b) {
        return a + b;
    }, 0);
console.log(sum4);