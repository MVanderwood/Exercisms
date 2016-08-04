var Year = function(inputYear) {
    this.year = inputYear;
};

Year.prototype.isLeap = function() {
    if (this.year % 100 === 0 && this.year % 400 !== 0) {
        return false;
    } else if (this.year % 4 === 0) {
        return true;
    }else {
        return false;
    }
};

module.exports = Year;
