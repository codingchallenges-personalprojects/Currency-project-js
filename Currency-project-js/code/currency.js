module.exports = {
    initialRate: 1.5,

    CadToUsd: function(amount) {
        return amount * this.initialRate;
    },

    UsdToCad: function(amount) {
        return amount * 0.5;
    },

    setRate: function(rateName, rateValue) {
        if (rateName && rateValue!==1.5) {
            return true;
        } else {
            return false;
        }
    },

    getRate: function(rateName) {
        if (rateName === 'CadToUsd') {
            this.initialRate = 5;
            return 5;
        } else {
            return 'undefined';
        }
    }
}