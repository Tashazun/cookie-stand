'use strict';
// Store hour array, total cookies, and locations.
const storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ','6pm: ', '7pm: ',  '8pm: '];
//const locations = ['PDX Airport', 'Pioneer Square', 'Powell\'s', 'St. John\'s', 'Waterfront'];
const cookies = [];

// Main constructor Function.
function Sales (minHourly, maxHourly, cookiesPer, locations) {
    this.minHourly = minHourly;
    this.maxHourly = maxHourly;
    this.cookiesPer = cookiesPer;
    this.locations = locations;
}

Sales.prototype.customerGen = function() {
    return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
};
Sales.prototype.customerPurchase = function() {
    return Math.floor(Math.random() * this.cookiesPer) + 1 + this.customerGen();
};
Sales.prototype.cookieBought = function() {
    for (let i = 0; i < 15; i++) {
        cookies.push(this.customerPurchase());
    }
};
Sales.prototype.render = function() {
        const column = document.getElementById('amounts')
        const thColumn = document.createElement('td');
        thColumn.textContent = this.location;
        column.appendChild(thColumn);
};

const createHeader = function() {
    for (let i = 0; i < storeHours.length; i++) {
        const row = document.getElementById('info');
        const thRow = document.createElement('th');
        thRow.textContent = storeHours[i]; 
        row.appendChild(thRow);
    }
};

console.log(createHeader());

Sales.prototype.saleTotals = function() {
    for (let z = 0; z < cookies.length; z++) {
        const td = document.createElement('td');
        td.textContent = cookies;
    }
};  
const sale1 = new Sales(6, 24, 3.4);

console.log(createRow);
console.log(cookies);
const airport = {
        minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    totalCookies: [],
    customerGen: function() {
        return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
    },
    customerPurchase: function() {
        return Math.floor(this.cookiePer * this.customerGen());
    },
    cookieBought: function() {
        for (let i = 0; i < 15; i++) {
            this.totalCookies.push(this.customerPurchase());
        }
    },
    cookieTotal: function() {
        let tally = 0;
        for (let w = 0; w < 15; w++) {
            tally = tally + this.totalCookies[w];
        }
        this.totalCookies.push(tally);
    },
    addList: function() {
        for (let x = 0; x < this.totalCookies.length; x++) {
            const list = document.getElementById('airport');
            const firstLi = document.createElement('li');
            firstLi.textContent = storeHours[x] + this.totalCookies[x] + ' cookies';
            list.appendChild(firstLi);
        }
    }
};
airport.customerGen();
airport.customerPurchase();
airport.cookieBought();
airport.cookieTotal();
airport.addList();
console.log('Number of customers at PDX Airport: ' + airport.customerGen(), 'Number of cookies purchased: ' + airport.customerPurchase());

// Amount of cookies needed at Pionner Square
const pioneerSquare = {
    minHourly: 3,
    maxHourly: 24,
    cookiePer: 1.2,
    totalCookies: [],
    customerGen: function() {
        return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
    },
    customerPurchase: function() {
        return Math.floor(this.cookiePer * this.customerGen());
    },
    cookieBought: function() {
        for (let i = 0; i < 15; i++) {
            this.totalCookies.push(this.customerPurchase());
        }
    },
    cookieTotal: function() {
        let tally = 0;
        for (let w = 0; w < 15; w++) {
            tally = tally + this.totalCookies[w];
        }
        this.totalCookies.push(tally);
    },
    addList: function() {
        for (let x = 0; x < this.totalCookies.length; x++) {
            const list = document.getElementById('pioneer');
            const firstLi = document.createElement('li');
            firstLi.textContent = storeHours[x] + this.totalCookies[x] + ' cookies';
            list.appendChild(firstLi);
        }
    }
};
pioneerSquare.customerGen();
pioneerSquare.customerPurchase();
pioneerSquare.cookieBought();
pioneerSquare.cookieTotal();
pioneerSquare.addList();
console.log('Number of customers at Pionner Square: ' + pioneerSquare.customerGen(), 'Number of cookies purchased: ' + pioneerSquare.customerPurchase());
// Amount of cookies needed at Powell's
const powells = {
    minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    totalCookies: [],
    customerGen: function() {
        return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
    },
    customerPurchase: function() {
        return Math.floor(this.cookiePer * this.customerGen());
    },
    cookieBought: function() {
        for (let i = 0; i < 15; i++) {
            this.totalCookies.push(this.customerPurchase());
        }
    },
    cookieTotal: function() {
        let tally = 0;
        for (let w = 0; w < 15; w++) {
            tally = tally + this.totalCookies[w];
        }
        this.totalCookies.push(tally);
    },
    addList: function() {
        for (let x = 0; x < this.totalCookies.length; x++) {
            const list = document.getElementById('powell');
            const firstLi = document.createElement('li');
            firstLi.textContent = storeHours[x] + this.totalCookies[x] + ' cookies';
            list.appendChild(firstLi);
        }
    }
};
powells.customerGen();
powells.customerPurchase();
powells.cookieBought();
powells.cookieTotal();
powells.addList();
console.log('Number of customers at Powell\'s: ' + powells.customerGen(), 'Number of cookies purchased: ' + powells.customerPurchase());

// Amount of cookies needed for St. Johns
const john = {
    minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    totalCookies: [],
    customerGen: function() {
        return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
    },
    customerPurchase: function() {
        return Math.floor(this.cookiePer * this.customerGen());
    },
    cookieBought: function() {
        for (let i = 0; i < 15; i++) {
            this.totalCookies.push(this.customerPurchase());
        }
    },
    cookieTotal: function() {
        let tally = 0;
        for (let w = 0; w < 15; w++) {
            tally = tally + this.totalCookies[w];
        }
        this.totalCookies.push(tally);
    },
    addList: function() {
        for (let x = 0; x < this.totalCookies.length; x++) {
            const list = document.getElementById('john');
            const firstLi = document.createElement('li');
            firstLi.textContent = storeHours[x] + this.totalCookies[x] + ' cookies';
            list.appendChild(firstLi);
        }
    }
};
john.customerGen();
john.customerPurchase();
john.cookieBought();
john.cookieTotal();
john.addList();
console.log('Number of customers at St. Johns: ' + john.customerGen(), 'Number of cookies purchased: ' + john.customerPurchase());

// Amount needed for the waterfront
const waterfront = {
    minHourly: 23,
    maxHourly: 65,
    cookiePer: 6.3,
    totalCookies: [],
    customerGen: function() {
        return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
    },
    customerPurchase: function() {
        return Math.floor(this.cookiePer * this.customerGen());
    },
    cookieBought: function() {
        for (let i = 0; i < 15; i++) {
            this.totalCookies.push(this.customerPurchase());
        }
    },
    cookieTotal: function() {
        let tally = 0;
        for (let w = 0; w < 15; w++) {
            tally = tally + this.totalCookies[w];
        }
        this.totalCookies.push(tally);
    },
    addList: function() {
        for (let x = 0; x < this.totalCookies.length; x++) {
            const list = document.getElementById('waterfront');
            const firstLi = document.createElement('li');
            firstLi.textContent = storeHours[x] + this.totalCookies[x] + ' cookies';
            list.appendChild(firstLi);
        }
    }
};
waterfront.customerGen();
waterfront.customerPurchase();
waterfront.cookieBought();
waterfront.cookieTotal();
waterfront.addList();
console.log('Number of customers at The Waterfront: ' + waterfront.customerGen(), 'Number of cookies purchased: ' + waterfront.customerPurchase());