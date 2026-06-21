function isPalindrome(word) {
    // Reverse the word.
    let wordReversed = word.split("").reverse().join("");

    // Return the boolean value whether the word is the same reversed.
    return word.toLowerCase() == wordReversed.toLowerCase();
}

function findPalindromeBreaks(words) {
    // Create an array to add to and return.
    let arrayOfIndices = new Array();

    // Iterate through the words array.
    for (let i = 0; i < words.length; i++) {
        // Check if the word is not a palindrome.
        if (!isPalindrome(words[i])) {
            // Add the word's index to the array of indices.
            arrayOfIndices.push(i);
        }
    }

    // Return the array of indices.
    return arrayOfIndices;
}

function arraysEqual(arrayA, arrayB) {
    if (arrayA === arrayB) return true;
    if (arrayA.length != arrayB.length) return false;

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] != arrayB[i]) return false;
    }
    return true;
}

function findRepeatedPhrases(words, phraseLength) {
    // Create an array to track phrases found in the words array.
    let encounteredPhrases = new Array();

    // Iterate through the words array slicing phrases.
    for (let i = 0; i < words.length; i++) {
        // Slice the phrase.
        let phrase = words.slice(i, i + phraseLength)

        // Make sure the phrase is complete.
        if (phrase.length == phraseLength) {
            encounteredPhrases.push({ phrase: phrase, index: i })
        }
    }

    // Create the array of indices to return.
    let arrayOfIndices = new Array()

    for (let phraseObject of encounteredPhrases) {
        // Create an object to store information.
        let encountered = { count: 0, arrayOfIndices: new Array() };

        // Iterate through the encounteredPhrases.
        for (let matchingPhraseObject of encounteredPhrases) {
            // Make sure it's not matching itself.
            if (phraseObject["index"] == matchingPhraseObject["index"]) {
                continue
            }

            // Check if the phrase objects are equivalent.
            if (arraysEqual(phraseObject["phrase"], matchingPhraseObject["phrase"])) {
                // Add to the encountered count.
                encountered.count += 1;
                // Push the index of the matched word.
                encountered.arrayOfIndices.push(matchingPhraseObject["index"])
            }
        }

        // Check if we have one or more matches.
        if (encountered.count >= 1) {
            // Iterate through each index in our encountered object's array.
            for (let indices of encountered["arrayOfIndices"]) {
                // Check if its already inside the array of indices.
                if (!arrayOfIndices.includes(indices)) {
                    // If not, add the index.
                    arrayOfIndices.push(indices);
                }
            }
        }
    }

    // Sort it.
    arrayOfIndices = arrayOfIndices.sort()

    // Return the array of indices.
    return arrayOfIndices;
}

function analyzeTexts(texts, phraseLength) {
    // Create an array to add to and return.
    let arrayOfAnalyses = new Array();

    // Iterate through each text.
    for (let text of texts) {
        // Use the previous functions.
        let palindromeBreaks = findPalindromeBreaks(text)
        let repeatedPhrases = findRepeatedPhrases(text, phraseLength)

        // Add the object.
        arrayOfAnalyses.push({ repeatedPhrases: repeatedPhrases, palindromeBreaks: palindromeBreaks });
    }

    // Return the array of analyses.
    return arrayOfAnalyses;
}