'use strict';
/* globals Store arrStores salesData */
/* exported addLocation */

function addLocation(event) {

    event.preventDefault();

    var formLocation = event.target.location.value;
    console.log('formLocation', event);

    var formMin = event.target.min.value;
    console.log('formMin', event);

    var formMax = event.target.max.value;
    console.log('formMax', event);

    var formAvg = event.target.avg.value;
    console.log('formAvg', event);

    var newStore = new Store(formLocation, formMin, formMax, formAvg);
    arrStores.push(newStore);
    console.log(arrStores);

}


var createForm = document.getElementById('form');
createForm.addEventListener('submit', function() {
    event.preventDefault();
    var cell = document.getElementsByTagName('td');
    cell.textContent = '';
    salesData(event);
    addLocation(event);

});