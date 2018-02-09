'use strict';
// Store hour array, total cookies, and locations.
const storeHours = [' ', '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ','6pm: ', '7pm: ',  '8pm: ', 'Daily Total Amount:'];

// Main constructor Function.
function Sales (minHourly, maxHourly, cookiesPer, name) {
    this.minHourly = minHourly;
    this.maxHourly = maxHourly;
    this.cookiesPer = cookiesPer;
    this.name = name;
    this.cookies = [];
    this.tally = 0;
}

Sales.prototype.customerGen = function() {
    return Math.floor(Math.random() * (this.maxHourly - this.minHourly)) + this.minHourly;
};
Sales.prototype.customerPurchase = function() {
    return Math.floor(this.cookiesPer * this.customerGen());
};
Sales.prototype.cookieBought = function() {
    for (let i = 0; i < 15; i++) {
        this.cookies.push(this.customerPurchase());
    }
};
Sales.prototype.cookieTotal = function() {
    for (let w = 0; w < 15; w++) {
        this.tally = this.tally + this.cookies[w];
    }

};
Sales.prototype.render = function() {
    const tBody = document.getElementById('amounts');
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    newRow.appendChild(nameCell);
    for (let x = 0; x < this.cookies.length; x++) {
        const newCell = document.createElement('td');
        newCell.textContent = this.cookies[x];
        newRow.appendChild(newCell);
        tBody.appendChild(newRow);
    }
    const thRow = document.createElement('td');
    thRow.textContent = this.tally;
    newRow.appendChild(thRow);
};

const airport = new Sales(23, 65, 6.3, 'Airport');
const pioneerSquare = new Sales(3, 24, 1.2, 'Pioneer Square');
const powell = new Sales(11, 38, 3.7, 'Powell\'s');
const stJohn = new Sales(20, 38, 2.3, 'St. John');
const waterfront = new Sales(2, 16, 4.6, 'Waterfront');

const locations = [airport, pioneerSquare, powell, stJohn, waterfront];

const runAll = function() {
    for (let a = 0; a < 5; a++) {
        if (locations.length > 5) {
            locations[locations.length - 1].customerGen();
            locations[locations.length - 1].customerPurchase();
            locations[locations.length - 1].cookieBought();
            locations[locations.length - 1].cookieTotal();
            locations[locations.length - 1].render();
            break;
        } else {
            locations[a].customerGen();
            locations[a].customerPurchase();
            locations[a].cookieBought();
            locations[a].cookieTotal();
            locations[a].render();
        }
    }
};

function createHeader() {
    for (let i = 0; i < storeHours.length; i++) {
        const row = document.getElementById('info');
        const thRow = document.createElement('th');
        thRow.textContent = storeHours[i];
        row.appendChild(thRow);

    }
};
runAll();
createHeader();

const form = document.querySelector('form');

form.addEventListener('submit', function() {
    event.preventDefault();

    const newStore = new Sales(
        this.minHourly.value,
        this.maxHourly.value,
        this.cookiesPer.value,
        this.name.value);

    locations.push(newStore);
    runAll();
}, false);