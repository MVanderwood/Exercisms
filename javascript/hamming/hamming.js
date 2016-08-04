var Hamming = function() {

};

Hamming.prototype.compute = function(firstStrand, secondStrand) {
    if (firstStrand.length !== secondStrand.length) {
        throw new InvalidInputError('DNA strands must be of equal length.');
    }
    var difference = 0;
    for (var i = 0; i < firstStrand.length; i++) {
        if (firstStrand[i] !== secondStrand[i]) {
            difference++;
        }
    }
    return difference;
};

var InvalidInputError = function(message) {
    this.name = 'InvalidInputError';
    this.message = message;
};

module.exports = Hamming;
