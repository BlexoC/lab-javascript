



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };



function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }

}

let num1= 10;
let num2= 20;

let maximum =findMaximum(num1, num2);
console.log("The maximum number is: " + maximum);


function isPalindrome(word) {
    let rev = word.split("").reverse("").join("");

    if (rev == word) {
        return true
    }
    return false

}

let word1 = "racecar";
let word2 = "nitin";
let word3 = "Rama";

console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));



function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax rate
    let tax = amount * taxRate;
    let totalAmount = amount - tax;
    return totalAmount;
}

let amount = 100;
let totalAmount = calculateTax(amount);{
console.log("The total amount including tax is: " + totalAmount);}


function calculateDiscountedPrice(originalPrice, discountPercentage){
    if (discountPercentage < 0 || discountPercentage > 100) {
        console.error("Invalid discount percentage. It should be between 0 and 100.");
        return null;
    }
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}

let originalPrice = 100;
let discountPercentage = 20;

let finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
if (finalPrice !== null) {
    console.log("The discounted price is: " + finalPrice);
}




function convertToUpperCase(str) {
  return str.toUpperCase();
}   

console.log(convertToUpperCase('blessing')); 







