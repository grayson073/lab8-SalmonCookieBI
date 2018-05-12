'use strict';


var headerRow = ['Locations', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 'TOTAL'];
var footerRow = ['TOTAL', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'TEST', 'test'];

function createHeader() {
    var tbl = document.getElementById('cookie-table');
    var tblHead = document.createElement('thead');
    
    for(var i = 0; i < 1; i++) {
        var row = document.createElement('tr');
        
        for(var j = 0; j < headerRow.length; j++) {
            var cell = document.createElement('th');
            var cellText = document.createTextNode('Head' + (i + 1) + 'Col' + (j + 1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblHead.appendChild(row);
    }
    tbl.appendChild(tblHead);
}

function salesData() {
    var tbl = document.getElementById('cookie-table');
    var tblBody = document.createElement('tbody');
    
    for(var i = 0; i < 1; i++) {
        var row = document.createElement('tr');
        
        for(var j = 0; j < headerRow.length; j++) {
            var cell = document.createElement('td');
            var cellText = document.createTextNode('Body' + (i + 1) + 'Col' + (j + 1));
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
    
    for(var i = 0; i < 1; i++) {
        var row = document.createElement('tr');
        
        for(var j = 0; j < headerRow.length; j++) {
            var cell = document.createElement('td');
            var cellText = document.createTextNode('Foot' + (i + 1) + 'Col' + (j + 1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblFoot.appendChild(row);
    }
    tbl.appendChild(tblFoot);
}


/* function cookiesToSell() {
    var tbody = document.getElementsByTagName('tbody')[0];
    var row = tbody.insertRow(0);

    for(var i = 0; i < headerRow; i++) {
        cell[i] = row.insertCell(i);
    }

    for(var j = 0; j < 15; j++) {
        cell[j].textContent = this.random();
        cell[0].textContent = this.location;
    }
} */

/* function salesData() {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for(var i = 0; i < arrStores.length; i++) {
        arrStores[i].cookiesToSell();
    }
}



function createFooter() {
    var table = document.getElementsByTagName('table')[0];
    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var row = tfoot.insertRow(0);
    var cell = [];

    for(var i = 0; i < headerRow.length; i++) {
        cell[i] = row.insertCell(i);
        cell[i].textContent = headerRow[i];
    }
}
 */


createHeader();
salesData();
createFooter();