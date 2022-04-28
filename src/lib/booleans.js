function negate(a) {
  return !a
};

function both(a, b) {
  if (a == true && b == true)
    return true
  else 
    return false
};

function either(a, b) {
  if (a == true || b == true)
    return true
  else
    return false
};

function none(a, b) {
  if (a == false && b == false)
  return true
  else return false
};

function one(a, b) {
  if ((a == true && b == false) || (a == false && b == true))
  return true
  else return false
};

function truthiness(a) {
  if (a){
    return true
  }
  else{
    return false
  }
};

function isEqual(a, b) {
  if (a === b){
    return true
  }
  else {
    return false
  }
};

function isGreaterThan(a, b) {
  if (a > b){
    return true
  }
  else {
    return false
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b){
    return true
  }
  else {
    return false
  }
};

function isOdd(a) {
  if (a % 2 == 0){
    return false
  }
  else {
    return true
  }
};

function isEven(a) {
  if (a % 2 == 0){
    return true
  }
  else {
    return false
  }
};

function isSquare(a) {
    if (Math.sqrt(a) % 1 == 0)
      return true
    else 
      return false
};

function startsWith(char, string) {
  if (string.charAt(0) == char){
    return true
  }
  else {
    return false
  }
};

function containsVowels(string) {

string = string.toLowerCase()
return /[aeiou]/.test(string)

};

function isLowerCase(string) {
  if (string == string.toLowerCase()){
    return true
  }
  else {
    return false
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
