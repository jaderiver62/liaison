class Employee {

    constructor(name = '') {
        this.name = name;
        this.id = id; // some randomizing code
        this.email = email;

    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
/*var result = "";
               var upperCharacterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
               var lowercaseCharacterSet = "abcdefghijklmnopqrstuvwxyz";
               var specialCharacterSet = "!\"#$%&\'()*+,-./:;<=>?@[\ ]^_`{}|~";
               var numericSet = "0123456789";
               // I could have used random numbers for numeric but I thought I would keep things strings so I don't have to worry about changing types
               for (var i = 0; i < numberLowercase; i++) {
                   result += lowercaseCharacterSet.charAt(getRandomNumber(lowercaseCharacterSet.length));
               }

               for (var i = 0; i < numberUppercase; i++) {
                   result += upperCharacterSet.charAt(getRandomNumber(upperCharacterSet.length));
               }

               for (var i = 0; i < numberNumeric; i++) {
                   result += numericSet.charAt(getRandomNumber(numericSet.length));
               }

               for (var i = 0; i < numberSpecialCharacter; i++) {
                   result += specialCharacterSet.charAt(getRandomNumber(specialCharacterSet.length));
               }
               // If the user doesn't specify all of the characters it just fills those extra slots with random numbers
               if (result.length < passwordLength) {
                   var difference = passwordLength - result.length;
                   for (var i = 0; i < difference; i++) {
                       result += numericSet.charAt(getRandomNumber(numericSet.length));
                   }
               }
               //this calls the shuffleCharacters method with mixes the random characters up for a more fun password
               return shuffleCharacters(result);
           } */