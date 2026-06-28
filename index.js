function calculateTax(amount) {
  // Calculate 10% of the incoming amount and return it directly
  return amount * 0.10;
}

function convertToUpperCase(text) {
  // Use JavaScript's built-in string method to change the text to uppercase
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  // Compare the two numbers and return the larger one
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function isPalindrome(word) {
  // 1. Split the word into individual letters
  // 2. Reverse the order of those letters
  // 3. Join them back together into a single string
  const reversedWord = word.split("").reverse().join("");
  
  // Check if the original word matches the reversed version exactly
  return word === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // Find the total discount amount (e.g., 70,000 * (10 / 100) = 7,000)
  const discountAmount = originalPrice * (discountPercentage / 100);
  
  // Subtract that discount from the original price to get the final total
  return originalPrice - discountAmount;
}

// This is required for the test to function properly
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };