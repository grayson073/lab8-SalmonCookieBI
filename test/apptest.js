'use strict';
/* globals arrStores */
/* exported getColumnTotals */


var headerRow = ['Locations', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 'Total'];
var footerRow = ['', 'T6am', 'T7am', 'T8am', 'T9am', 'T10am', 'T11am', 'T12pm', 'T1pm', 'T2pm', 'T3pm', 'T4pm', 'T5pm', 'T6pm', 'Total'];
var sumCol = [];

function createHeader() {
    var tbl = document.getElementById('cookie-table');
    var tblHead = document.createElement('thead');
    var row = document.createElement('tr');
    
    for(var j = 0; j < headerRow.length; j++) {
        var cell = document.createElement('th');
        var cellText = document.createTextNode(headerRow[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblHead.appendChild(row);
    tbl.appendChild(tblHead);
}

// First loop creates rows based on index of class Store
// Second, nested loop creates rows based on headerRow.length
// and creates random values based on min/max/avg of arrStores data
function salesData() {
    var tbl = document.getElementById('cookie-table');
    var tblBody = document.createElement('tbody');
    
    for(var i = 0; i < arrStores.length; i++) {
        var row = document.createElement('tr');
        
        for(var j = 0; j < headerRow.length; j++) {
            var cell = document.createElement('td');
            var cellText = document.createTextNode(arrStores[i].random());
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
}


function createFooter() {
    var tbl = document.getElementById('cookie-table');
    var tblFoot = document.createElement('tfoot');
    var row = document.createElement('tr');
    
    for(var j = 0; j < headerRow.length; j++) {
        var cell = document.createElement('td');
        var cellText = document.createTextNode(footerRow[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblFoot.appendChild(row);
    tbl.appendChild(tblFoot);
}


function keepLocationColumn() {
    for(var i = 0; i < arrStores.length; i++) {
        var locate = document.getElementById('cookie-table').rows[i + 1].cells[0];
        locate.innerHTML = arrStores[i].location;
    }
}


function getColumnTotals() {
    var rows = document.getElementById('cookie-table').getElementsByTagName('tr');
    var sum = 0;

    var accounts = [];
    for(var a = 0; a < rows.length - 2; a++) {
        accounts[a];
        console.log(accounts);
    }

/*     for(var b = 0; b < headerRow.length - 2; b++) {

    } */

    for(var i = 0; i < (rows.length - 2); i++) {
        sum += parseFloat(rows[i + 1].cells[1].firstChild.data);
        console.log('sum: ' + sum);
    }
    sumCol.push(sum);
    console.log('sumCol array: ' + sumCol);
}

createHeader();
salesData();
createFooter();
keepLocationColumn();
getColumnTotals();


/* var TEST = document.getElementById('cookie-table').rows[1].cells[1];
console.log(TEST); */