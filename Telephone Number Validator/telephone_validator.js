function telephoneCheck(str) {
    const regExp = /^(1 ?)?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
    
    return regExp.test(str);
  }
  
  telephoneCheck("555-555-5555");