module.exports = function toReadable (number) {
    let arrUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
        return arrUnits[number];
    } else if (number < 100) {
        return (number % 10 === 0) ? arrDozens[(~~(number / 10)) - 2] : arrDozens[(~~(number / 10)) - 2] + ' ' + toReadable(number % 10);
    } else if (number < 1000){
        return (number % 100 === 0) ? arrUnits[~~(number / 100)] + ' hundred' : arrUnits[~~(number / 100)] + ' hundred ' + toReadable(number % 100);
    };
}
