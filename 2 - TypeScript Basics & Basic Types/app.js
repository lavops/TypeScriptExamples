// Unknown, Never Type
var userInput;
var username;
userInput = 5;
userInput = 'Max';
// Unknown mora uvek da se pita koji je tip
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
