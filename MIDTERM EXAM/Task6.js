function firstUniqueChar(str) {
    let memo = {};
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase(); // for non case sensitive
        if (!memo[letter]) {
            memo[letter] = 0;
        }
        memo[letter] += 1;
    }
    for (const [key, value] of Object.entries(memo)) {
        if (value == 1){ // checks first instance
            if(!str.includes(key)){ // check if value in the string is upper case
                return key.toUpperCase();
            }
        else {
            return key; // else return
        }
        }
}
}

    // Code Here

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc'));