'use strict';

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