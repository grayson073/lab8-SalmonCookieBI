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
            return Math.ceil(j * this.avg);
        };
    }

    // Locates tbody, declares cell[], creates one row, loops creation of cell data when called in app.js
    cookiesToSell() {
        var tbody = document.getElementsByTagName('tbody')[0];
        var cell = [];
        var row = tbody.insertRow(0);

        for(var i = 0; i < 15; i++) {
            cell[i] = row.insertCell(i);
        }

        for(var j = 0; j < 15; j++) {
            cell[j].textContent = this.random();
            cell[0].textContent = this.location;
        }

        /* // Onclick (testing), grabs trs from the page, row 4
        // Loops through all cells - 1 (last cell is "Total")
        // Parses data and returns a floating point number
        // sum += val keeps running total
        // console logs return value
        window.onclick = function() {
            var cells = document.querySelectorAll('tr:nth-child(4) td');
            var sum = 0;
            for(var i = 0; i < (cells.length - 1); i++) {
                var val = parseFloat(cells[i].firstChild.data);
                if(!isNaN(val)) {
                    sum += val;
                }
            }

            console.log(sum);
        };
         */

         
        // locates table via querySelector, loads table.onclick (using to test)
        // function locates table and then tr tags
        // loops through td data, parses to return a floating point number
        // declares var for one column, loops through rows to add up: sumCol +=
        // console logs return value
        window.onload = function clickTable() {
            var table = document.querySelector('table');
            table.onclick = sumCol;
        };
          
        function sumCol() {
            var rows =
                document.getElementById('sum-table').getElementsByTagName('tr');
            var sumCol1 = '';
            var sumCol2 = 0;
            var sumCol3 = 0;
            var sumCol4 = 0;
            var sumCol5 = 0;
            var sumCol6 = 0;
            var sumCol7 = 0;
            var sumCol8 = 0;
            var sumCol9 = 0;
            var sumCol10 = 0;
            var sumCol11 = 0;
            var sumCol12 = 0;
            var sumCol13 = 0;
            var sumCol14 = 0;
            var sumCol15 = 0;
          
            // includes the first column for visual context (string of locations)
            // omit the last row, which is to be used for totals later
            for(var i = 1; i < (rows.length - 1); i++) {
                sumCol1 += (rows[i].childNodes[0].firstChild.data + ', ');
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol2 += parseFloat(rows[i].childNodes[1].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol3 += parseFloat(rows[i].childNodes[2].firstChild.data);
            }
            
            for(i = 1; i < (rows.length - 1); i++) {
                sumCol4 += parseFloat(rows[i].childNodes[3].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol5 += parseFloat(rows[i].childNodes[4].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol6 += parseFloat(rows[i].childNodes[5].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol7 += parseFloat(rows[i].childNodes[6].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol8 += parseFloat(rows[i].childNodes[7].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol9 += parseFloat(rows[i].childNodes[8].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol10 += parseFloat(rows[i].childNodes[9].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol11 += parseFloat(rows[i].childNodes[10].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol12 += parseFloat(rows[i].childNodes[11].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol13 += parseFloat(rows[i].childNodes[12].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol14 += parseFloat(rows[i].childNodes[13].firstChild.data);
            }

            for(i = 1; i < (rows.length - 1); i++) {
                sumCol15 += parseFloat(rows[i].childNodes[14].firstChild.data);
            }


            console.log('Sums from 1st column: ' + sumCol1);
            console.log('Sums from 2nd column: ' + sumCol2);
            console.log('Sums from 3rd column: ' + sumCol3);
            console.log('Sums from 4th column: ' + sumCol4);
            console.log('Sums from 5th column: ' + sumCol6);
            console.log('Sums from 6th column: ' + sumCol5);
            console.log('Sums from 7th column: ' + sumCol7);
            console.log('Sums from 8th column: ' + sumCol8);
            console.log('Sums from 9th column: ' + sumCol9);
            console.log('Sums from 10th column: ' + sumCol10);
            console.log('Sums from 11th column: ' + sumCol11);
            console.log('Sums from 12th column: ' + sumCol12);
            console.log('Sums from 13th column: ' + sumCol13);
            console.log('Sums from 14th column: ' + sumCol14);
            console.log('Sums from 15th column: ' + sumCol15);
        }


        
        /*         window.onload = function() {
            var table = document.querySelector('table');
            table.onclick = sum;
        };

        function sum() {
            var rows =
                document.getElementsByTagName('table')[0].getElementsByTagName('tr');
            var sum = 0;

            for(var i = 1; i < rows.length; i++) {
                sum += parseFloat(rows[i].childNodes[2].firstChild.data);
            }
            alert(sum);
        } */
    }

/*             var table = document.getElementsByTagName('table')[0];
            for(var p = 0; row = table.rows[p]; p++) {
            console.log('Testing ROW ' + p);

            for(var z = 0, col; col = row.cells[z]; z++) {
            console.log('ROW ' + p + ' COL ' + z);
            }
        }  */
}