
//sum of digit
    let num = 2564;
    let sum = 0;
let temp = num;
while (temp > 0) {
    var r = temp % 10;
 sum = sum + r;
temp = parseInt(temp / 10);
}
console.log(sum);
