const fromEuroToDollar = (euroAmount) => {
    const conversionRate = 1.07;
    return euroAmount * conversionRate;
}

// Just a console log for ourselves
console.log(fromEuroToDollar(100)); // Should output 107

// Export the function to be used in other files
module.exports = { fromEuroToDollar };