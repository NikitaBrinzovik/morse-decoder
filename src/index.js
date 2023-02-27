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
    const peaces = [];
    let part = '';
    let slice = '';
    let result = '';
    let peaceNumber = '';

    for (let i = 0; i < expr.length; i += 10) {
        if (i + 10 > expr.length) {
            part = expr.slice(i);
            slice = part.padStart(10, '0');
            part.push(slice);
        } else {
            peaces.push(expr.slice(i, i + 10));
        }
    }

    peaces.forEach((peace) => {
        let res = '';
        for (let i = 0; i < peace.length; i += 2) {
            peaceNumber = peace.slice(i, i + 2);
            if (peaceNumber === "11") res += "-";
            if (peaceNumber === "10") res += ".";
            if (peaceNumber.includes("*")) {
                res += " ";
                break;
            }
        }

        result += res.includes(" ") ? ' ' : MORSE_TABLE[res];
    });

    return result;
}

module.exports = {
    decode
}
