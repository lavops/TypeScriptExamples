// Unknown, Never Type
let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Max';

// Unknown mora uvek da se pita koji je tip
if(typeof userInput === 'string') {
    username = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500);