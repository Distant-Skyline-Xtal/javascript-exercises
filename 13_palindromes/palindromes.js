const palindromes = function (word) {
    word = word.replaceAll(" ", "");
    word = word.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    word = word.toLowerCase();
    let wordChars = word.split('');
    let isPalindrome = true;
    let sequenceComplete = false;
    let startIndex = 0;
    let endIndex = wordChars.length - 1;
    while(!sequenceComplete) {
        if (startIndex > endIndex)
        {
            sequenceComplete = true;
            isPalindrome = true;
            continue;
        }

        if (startIndex == endIndex) {
            isPalindrome = true;
            sequenceComplete = true;
            continue;
        }

        if (wordChars[startIndex] != wordChars[endIndex]) {
            isPalindrome = false;
            sequenceComplete = true;
            continue;
        }

        startIndex++;
        endIndex--;
    }

    return isPalindrome;
};
// Do not edit below this line
module.exports = palindromes;
