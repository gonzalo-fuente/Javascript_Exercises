function palindrome(str) {
    //Swith to lower case
    const test = str.toLowerCase();
  
    //Remove all non-alphanumeric characters and save the result in an array
    const regExp = /[a-z0-9]/g;
    const testArr = test.match(regExp);
  
    //Check if the Array is a palindrome
    const numTests = Math.floor(testArr.length/2);
    for (let i=0; i<numTests; i++) {
        if (testArr.shift() !== testArr.pop()) {
            return false;
        }
    }
    return true;
  }
  
  palindrome("almostomla");