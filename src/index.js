const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    //1.first loop cut expression for 10 symbols
    for (let i = 0; i < expr.length; i+= 10) {
        let sliceTen = expr.slice(i, i + 10);
        //2.if word = 10* decode as space symbol
        if (sliceTen === '**********') {
            result += ' ';
        } else {
            let morseKey ='';
            //3. second loop cut sliceTen for 2 symbols 1 or 0 to convert to + or -
            for (let j = 0; j < 10; j+= 2) {
                let sliceTwo = sliceTen.slice(j, j + 2);

                //4. If two symbols = 10 convert to '.' and add to morseKey
                if (sliceTwo === '10') {
                    morseKey += '.';
                //5. If two symbols = 11 convert to '.' and add to morseKey
                } else if (sliceTwo === '11') {
                    morseKey += '-';
                }
            }
            //6. add to result value of morseKey
            result += MORSE_TABLE[morseKey];
        }
    }
    return result;
}

module.exports = {
    decode
}