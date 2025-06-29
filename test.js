test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(100);

    // If 1 dollar is 146.26 yen, then 100 dollars should be (100 * 146.26)
    const expected = 100 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(100)).toBe(14626); // 1 dollar is 146.26 yen, then 100 dollars should be = (100 * 146.26)
})

test("One yen should be .00556 pounds", function() {
    // Import the function from app.js
    const {fromYenToPound} = require('./app.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(1000);

    // If 1 yen is .00556 pounds, then 1000 yen should be (1000 * .00556)
    const expected = 1000 * .00556; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(5.56); // 1 yen is .00556 yen, then 1000 yen should be = (1000 * .00556)
})