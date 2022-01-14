function convertToRoman(num) {
    // Define the strings for thousands, hundreds, tenths and ones;
    const m = ["", "M", "MM", "MMM"];
    const c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
         
    // Convert the number to roman
    const thousands = m[Math.floor(num / 1000)];
    const hundreds = c[Math.floor((num % 1000) / 100)];
    const tenths = x[Math.floor((num % 100) / 10)];
    let ones = i[num % 10];
         
    return thousands + hundreds + tenths + ones;
}

convertToRoman(36);