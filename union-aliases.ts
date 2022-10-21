type combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: combinable,
  input2: combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return resultConversion.toString();
  //   }
  return result;
}

const combinedAges: Function = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedText = combine("MAX", "Anna", "as-text");
console.log(combinedText);

export {};
