1. tsc app.ts --> app.js 로 컴파일

# Core Types

1.  number : 1, 5.3 , -10
2.  string : 'hi' , "hi" , `hi`
3.  boolean : true , false , 1 , 0
4.  object : {age:30}
5.  array : [1,2,3]
6.  Tuple : [1, "gg"] 튜플은 길이와 타입이 고정된 배열을 의미합니다.

    const user1 = [1, 'setType77@example.com', '1q2w3e4r'];
    const user2 = [2, 'anonymous@example.com', '1q2w3e4rvbf'];
    const user3 = [3, 'imThree@example.com', '1q2w3e4rawrbrf'];

    그런데 이 규칙을 모르는 개발자가 아이디와 비밀번호의 순서를 바꾸는 등, 배열에 담긴 데이터의 순서를 무시하고 배열을 만들면 어떻게 될까요?

    아마 해당 배열을 사용하는 코드에서 문제가 발생할 가능성이 있을 겁니다.

    이러한 문제를 해결하기 위해서 타입스크립트에는 튜플이라는 개념을 도입하였습니다. 튜플 타입을 만드는 방법은 간단합니다. 필요한 데이터 타입을 원하는 데이터 길이만큼 정해주면 됩니다.

    let user1: [number, string, string];
    user1 = [1, 'setType77@example.com', '1q2w3e4r'];

7.  Enum : 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다

    enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
    }

    코드에서 Up이 1 로 초기화된 숫자 열거형을 선언했습니다. 그 지점부터 뒤따르는 멤버들은 자동으로-증가된 값을 갖습니다. 즉 Direction.Up 은 1, Down 은 2, Left 는 3, Right 은 4 을 값으로 가집니다.

    enum Direction {
    Up,
    Down,
    Left,
    Right,
    }
    위 경우 Up 값은 0, Down 은 1 이 됩니다. 자동-증가하는 기능은 멤버 값 자체에는 신경 쓰지 않지만, 각 값이 같은 열거형의 다른 값과 구별돼야 하는 경우에 유용합니다.

8.  Any : 알수 없는 데이터, 피해야한다.
9.  Union
    function combine(input1: number | string, input2: number | string) { <== Union Type
    if (typeof input1 === "number" && typeof input2 === "number") {
    let result = input1 + input2;
    } else {
    result = input1.toString() + input2.toString();
    }
    return result;
    }

    const combinedAges = combine(30, 26);
    console.log(combinedAges);

    const combinedAges = combine("MAX", "Anna");
    console.log(combinedAges);

10. Literal Type
    combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text" <== Literal Type
    )

11. Type Aliases
    Type Aliases & Object Types
    Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

        For example:

        type User = { name: string; age: number };
        const u1: User = { name: 'Max', age: 30 }; // this works!
        This allows you to avoid unnecessary repetition and manage types centrally.

        For example, you can simplify this code:

        function greet(user: { name: string; age: number }) {
            console.log('Hi, I am ' + user.name);
        }

        function isOlder(user: { name: string; age: number }, checkAge: number) {
            return checkAge > user.age;
        }
        To:

        type User = { name: string; age: number };

        function greet(user: User) {
            console.log('Hi, I am ' + user.name);
        }

        function isOlder(user: User, checkAge: number) {
            return checkAge > user.age;
        }

12. function : return type Void
    function add(n1: number, n2: number) :void {
    return n1 + n2;
    }

    function printResult(num: number): undefined {
    // void 는 return 값이 없다.
    console.log("Result :" + num);
    }

    printResult(add(5, 12));

    let someValue: undefined;

    export {};

13. function Type
    function add(n1: number, n2: number) {
    return n1 + n2;
    }

        function printResult(num: number): void {
        // void 는 return 값이 없다.
        console.log("Result :" + num);
        }

        printResult(add(5, 12));

        let combineValues: (a: number, b: number) => number;
        combineValues = add;

        console.log(combineValues(8, 8));

14. callback function
    콜백함수(Callback Function) 란 콜백은 간단히 말하면 함수 안에서 실행하는 또 다른 함수 이다.
    또 다른 함수를 만들 때 인풋(parameters)을 함수로 받아서 사용할 수 있는데, 이 때 인자로 사용되는 함수를 말한다.즉, 파라미터로 변수가 아닌 함수를 전달하는 것을 말하며, 또한 함수이름 없이 익명으로도 전달 가능한 함수를 일컫는다.

    function introduce (lastName, firstName, callback) {
    var fullName = lastName + firstName;

        callback(fullName);

    }

    introduce("홍", "길동", function(name) {
    console.log(name);
    });
    // 결과 -> 홍길동

    function introduce (lastName, firstName, callback) {
    var fullName = lastName + firstName;

        callback(fullName);

    }

    function say_hello (name) {
    console.log("안녕하세요 제 이름은 " + name + "입니다");
    }

    function say_bye (name) {
    console.log("지금까지 " + name + "이었습니다. 안녕히계세요");
    }

    introduce("홍", "길동", say_hello);
    // 결과 -> 안녕하세요 제 이름은 홍길동입니다

    introduce("홍", "길동", say_bye);

15. known Type
    let userInput: unknown;
    let userName: string;

    userInput = 5;
    userInput = "Max";

    //타입이 unknown이면 검증절차가 필요하다.
    if (typeof userInput === "string") {
    userName = userInput;
    }

16. 런타임 - 프로그래밍 언어가 구동 되는 환경
    javascript가 browser에서 구동 - 런타임 : browser
    javascript가 Node.js에서 구동 - 런타임 : Node.js
    이더리움 스마트계약이, 이더리움 가상 머신에서 구동 - 런타임 : 이더리움 가상 머신

## typescript type : LowCase

## 실행하기

    lite-server 실행
    tsc-w  <-- nodemon 처럼 실시간 실행

# let 으로 선언하게 되면 타입추론이 일어나게 된다. 타입추론으로
