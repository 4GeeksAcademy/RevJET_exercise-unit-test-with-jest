const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(100,50))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };