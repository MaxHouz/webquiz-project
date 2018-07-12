function Timer(elem) {
    var time = 1;
    var interval;
    var offset;

    function update() {
        time += delta();
        elem.innerHTML = timeFormatter(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeMilliseconds) {
        var time = new Date(timeMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }
        if (seconds.length < 2) {
            seconds = "0" + seconds;
        }

        return minutes + ": " + seconds;
    }

    this._works = false;

    this.start = function() {
        if (!this._works) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this._works = true;
        }
    };
    this.stop = function() {
        if (this._works) {
            clearInterval(interval);
            interval = null;
            this._works = false;
        }
    };
    this.reset = function() {
        time = 0;
    };

    this.timeStop = function() {
        this.stop();
        return elem.innerHTML;
    }
}