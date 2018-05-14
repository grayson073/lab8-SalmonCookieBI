'use strict';
/* globals Store arrStores salesData keepLocationColumn */
/* exported addLocation */

function addLocation(event) {

    event.preventDefault();

    var formLocation = event.target.location.value;
    var formMin = event.target.min.value;
    var formMax = event.target.max.value;
    var formAvg = event.target.avg.value;

    var newStore = new Store(formLocation, formMin, formMax, formAvg);
    arrStores.push(newStore);
    console.log(arrStores);

}


var createForm = document.getElementById('form');
createForm.addEventListener('submit', function() {
    event.preventDefault();
    var wholeTable = document.getElementById('cookie-table').getElementsByTagName('tbody td');
    wholeTable.textContent = '';
    console.log(wholeTable);
    salesData();
    addLocation(event);
    keepLocationColumn(event);

});