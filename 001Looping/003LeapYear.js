let year = 2016;

    // Implementing our algorithm.
    if (year % 400 == 0) {
      console.log(year + " is a leap year.");
    } 
    else if (year % 100 == 0) {
      console.log(year + " is not a leap year.");
    } 
    else if (year % 4 == 0) {
      console.log(year + " is a leap year.");
    } 
    else {
      console.log(year + " is not a leap year.");
    }