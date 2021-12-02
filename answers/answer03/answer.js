function isAnagram(word1, word2) {
    const word1arr = word1.split("");
    const word2arr = word2.split("");

    word1arr.sort()
    word2arr.sort()

    if (word1.length != word2.length) {
        return false;
    }

    for (var i = 0; i < word1arr.length; i++) {
        if (word1arr[i] != word2arr[i]) {
            return false;
        }
    }

    return true;
}

const anagram1 = isAnagram('silent', 'listen');
const anagram2 = isAnagram('hello', 'world');

console.log(anagram1);
console.log(anagram2);