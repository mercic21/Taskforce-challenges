function transformString(str) {
    const isDivisibleBy3 = str.length % 3 === 0;
    const isDivisibleBy5 = str.length % 5 === 0;
    const isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5;
  
    if (isDivisibleBy15) {
      // Reverse, then convert to ASCII codes (reverse takes precedence)
      return reverseString(getCharCodeString(str));
    } else if (isDivisibleBy5) {
      // Convert to ASCII codes
      return getCharCodeString(str);
    } else if (isDivisibleBy3) {
      // Reverse the string
      return reverseString(str);
    } else {
      // No transformation needed, return original string
      return str;
    }
  }
  
  function reverseString(str) {
    // Split the string into an array, reverse it, and join back
    return str.split("").reverse().join("");
  }
  
  function getCharCodeString(str) {
    // Iterate through characters, get ASCII code, and add space
    let charCodeString = "";
    for (let char of str) {
      charCodeString += char.charCodeAt(0) + " ";
    }
    return charCodeString.trim();
  }