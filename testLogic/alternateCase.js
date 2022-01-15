function myFunction(input) {
    var output = '';
    for (var i = 0, len = input.length; i < len; i++) {
      var character = input[i];
      if (character == character.toLowerCase()) {
        // The character is lowercase
        output = output + character.toUpperCase();
      } else {
        // The character is uppercase
        output = output + character.toLowerCase();
      }
    }
   return output
  }

  console.log(myFunction("SiaPa"))