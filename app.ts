let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

//타입이 unknown이면 검증절차가 필요하다.
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
