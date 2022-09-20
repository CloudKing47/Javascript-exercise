const reverse = n => {
    const str      = "" + Math.abs(n); // convert absolute value to string
    const reversed = str.split("")     // get array of digit characters
                     .reverse()        // reverse it
                     .join("");        // join into string again;
    const num      = +reversed;        // convert integer
    return (n < 0 ? -1 : 1) * num;     // multiple by -1 if needed
  }

  console.log(reverse(-123))