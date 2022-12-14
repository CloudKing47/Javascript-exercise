function romanNumbers(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    let roman = "";
  
    for (i = 0; i < values.length; i++) {
     while(values[i] <= num) {
        roman += romanNumerals[i];
        num -= values[i];
      }
    }
    return roman;
  }
  
  console.log(romanNumbers(58));