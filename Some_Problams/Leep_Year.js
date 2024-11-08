function checkLeapYears(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(year + " is a Leap Year");
        } else {
            console.log(year + " is not a Leap Year");
        }
    }
}

// Example usage:
checkLeapYears(2000, 2024);
