1. tsc app.ts --> app.js 로 컴파일

# Core Types

1.  number : 1, 5.3 , -10
2.  string : 'hi' , "hi" , `hi`
3.  boolean : true , false , 1 , 0
4.  object : {age:30}
5.  array : [1,2,3]
6.  Tuple : [1, "gg"]
7.  Enum : enum {NEW, OLD}
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
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

## typescript type : LowCase

# let 으로 선언하게 되면 타입추론이 일어나게 된다. 타입추론으로
