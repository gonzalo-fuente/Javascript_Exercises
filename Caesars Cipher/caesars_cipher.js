function rot13(str) {
    const arr = [];
  
    //Convert all caracters to ascii notation and save them into an array
    for (let i=0; i<str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
  
    // Caracters from 65 to 90 are letters from A-Z, so if in the range, we need to add 13
    const rotArr = arr.map((item)=> {
        // if letters then convert
        if (item >= 65 && item <= 77) {
            return item += 13;
        } else if(item > 77 && item <= 90) {
            return item -= 13;
        }
        return item;
    });
    
    //convert the array into string
    return String.fromCharCode(...rotArr);
  }
  
  rot13("SERR PBQR PNZC");