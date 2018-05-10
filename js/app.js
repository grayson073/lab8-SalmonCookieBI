'use strict';
/* globals Stores */
/* exported createHeader */

var headerRow = ['Locations', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var arrStores = new Array();
arrStores[0] = new Stores('PDX Airport', 23, 65, 6.3);
arrStores[1] = new Stores('Pioneer Square', 3, 24, 1.2);
arrStores[2] = new Stores('Powell\'s', 11, 38, 3.7);
arrStores[3] = new Stores('St. John\'s', 20, 38, 2.3);
arrStores[4] = new Stores('Waterfront', 2, 16, 4.6);


var arrFooters = [null, null, 'Total:', '$' + costTotal, '$' + priceTotal, inventoryTotal];


function createHeader() {
    var table = document.getElementsByTagName('table')[0];
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var row = thead.insertRow(0);
    var cell = [];
    
    for(var i = 0; i < headerRow.length; i++) {
        cell[i];
        cell[i] = row.insertCell(i);
        cell[i].textContent = headerRow[i];
    }
}

function salesData() {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for(var i = 0; i < headerRow.length; i++) {
       // headerRow[i].cookiesToSell();
    }
}

function createFooter() {
    var table = document.getElementsByTagName('table')[0];
    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var row = tfoot.insertRow(0);
    var cell = [];

    for(var i = 0; i < headerRow.length; i++) {
        cell[i];
        cell[i] = row.insertCell(i);
        cell[i].textContent = headerRow[i];
    }
}

createHeader();
salesData();
createFooter();