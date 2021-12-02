function maxRecurringChar(word) {
    const wordarr = word.split("");
    var temp_count = 0;
    var max_count = 0;
    var character = '';
    for (var i = 0; i < wordarr.length; i++) {
        if (wordarr[i] == wordarr[i + 1]) {
            temp_count++;
        }
        if (temp_count > max_count) {
            max_count += temp_count;
            temp_count = 0;
            character = wordarr[i];
        }
    }
    if (max_count == 0) {
        return 'no max';
    }
    return character;
}

const result = maxRecurringChar('aabacada');

console.log(result)