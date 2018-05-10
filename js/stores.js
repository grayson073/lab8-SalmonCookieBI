'use strict';
/* exported Stores */

class Stores {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;

        this.random = function() {
            var j = Math.floor(Math.random() * (this.max - this.min * 1)) + this.min;
            console.log('Checking J' + j);
            return Math.ceil(j * this.avg);
        };
    }

    cookiesToSell() {
        var tbody = document.getElementsByTagName('tbody')[0];

        var row = tbody.insertRow(0);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        var cell10 = row.insertCell(10);
        var cell11 = row.insertCell(11);
        var cell12 = row.insertCell(12);
        var cell13 = row.insertCell(13);

        cell0.textContent = this.location;
        cell1.textContent = this.random();
        cell2.textContent = this.random();
        cell3.textContent = this.random();
        cell4.textContent = this.random();
        cell5.textContent = this.random();
        cell6.textContent = this.random();
        cell7.textContent = this.random();
        cell8.textContent = this.random();
        cell9.textContent = this.random();
        cell10.textContent = this.random();
        cell11.textContent = this.random();
        cell12.textContent = this.random();
        cell13.textContent = this.random();

        return tbody;
    }
}
