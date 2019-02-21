var number1 = '1';
var number2 = '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999';

var S = '';
var temp = '';

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function add(index, num) {
    var c = Number(num) + Number(S[index]);
    if (c >= 10) {
        S = S.replaceAt(index, String(c)[1]);
        if (index != 0) add(index - 1, String(c)[0]);
        else S = String(c)[0] + S;
    } else {
        S = S.replaceAt(index, String(c));
    }
}
if (number1.length == 0 || number2.length == 0) {
    console.log("¬ведите числа");
    return;
}
if (number1.length > number2.length) {
    S = number1;
    for (var i = 0; i < number1.length - number2.length; i++)
        temp += '0';
    temp += number2;
} else {
    S = number2;
    for (var i = 0; i < number2.length - number1.length; i++)
        temp += '0';
    temp += number1;
}

for (var i = temp.length - 1, j = 0; i >= 0; i-- , j++) {
    add(i, temp[i]);
}

console.log(S);