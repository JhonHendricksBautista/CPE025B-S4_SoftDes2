const memo = {};
function power(base, exp) {
    if (exp > 1){
        return base * power(base, exp - 1);
    }
    else if (exp < 1){
        return base / power(base, Math.abs(exp - 1));
    }
    return base
// Code Here
}
// Test Code
console.log(power(2, 5));
console.log(power(2, -2));