function translatePigLatin(string) {
    /*
      Define the regular expression with a string literal.
  
      "(?<startingVowels>[aeiou]*)" optionally captures all starting vowels.
  
      "(?<startingConsonants>[^aeiou]+)" forcibly captures all consonants until a vowel is found.
  
      "(?<remainingCharacters>.*)" optionally captures all remaining characters in the word given that a consonant is proceeded by a vowel.
    */
    const pigLatinRegex = new RegExp(
        '(?<startingVowels>[aeiou]*)(?<startingConsonants>[^aeiou]+)(?<remainingCharacters>.*)',
        ""
    )

    // Store the regular expression match.
    const matchObject = string.match(pigLatinRegex);

    // Refer to the capture groups for readability.
    const startingVowels = matchObject.groups.startingVowels;
    const startingConsonants = matchObject.groups.startingConsonants;
    const remainingCharacters = matchObject.groups.remainingCharacters;

    // Define a pig latin translated word variable.
    let pigLatinString = string;

    /* 
      Check if the word contains no vowels by 
      checking if the word is made up entirely of consonants.
    */
    if (startingConsonants == string) {
        pigLatinString += "ay";
    }
    /*
      Check if the word starts with a vowel, in which case we add "way" to the end of the word.
  
      We check by checking the existence of "startingVowels" capture group.
    */
    else if (startingVowels) {
        pigLatinString += "way";
    }
    /*
      In the case of a starting vowel, we have to move the vowel to the end and add "ay" to it.
    */
    else if (startingConsonants) {
        pigLatinString = remainingCharacters + startingConsonants + "ay";
    }

    // Return the Pig Latin translated string.
    return pigLatinString;
}

console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));