const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const words = expr.split('**********');
    let decodedWords = [];

    for (const word of words) {
        let decodedWord = '';
        const letters = word.match(/.{1,10}/g);
        for (const letter of letters) {
            const morseLetter = letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            decodedWord += MORSE_TABLE[morseLetter];
        }
        decodedWords.push(decodedWord);
    }

    return decodedWords.join(' ');
}

module.exports = {
    decode
};