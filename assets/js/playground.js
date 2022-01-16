
console.clear();
console.log('Hellooooooooo world!!! Yeyyyyyyyyyyys');

const removeCharacterFromString = (str, char) => {
    let text = '';

    if (!text.length) return '';

    if (str[0] !== char) {
        text += str[0];
    }

    return text.concat(removeCharacterFromString(str.substr(1), char));
};

const input1 = 'this is a sample text to brag about';
const input2 = 'a';


console.log(removeCharacterFromString(input1, input2));