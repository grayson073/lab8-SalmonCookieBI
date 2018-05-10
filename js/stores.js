'use strict';
/* exported Stores */

class Stores {
    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;

        this.random = function() {
            var i = Math.floor(Math.random() * (max - min * 1)) + min;
            return i * this.avg;
        };
    }
}

var arrStores = new Array();
arrStores[0] = new Stores('PDX Airport', 23, 65, 6.3);
arrStores[1] = new Stores('Pioneer Square', 3, 24, 1.2);
arrStores[2] = new Stores('Powell\s', 11, 38, 3.7);
arrStores[3] = new Stores('St. John\s', 20, 38, 2.3);
arrStores[4] = new Stores('Waterfront', 2, 16, 4.6);