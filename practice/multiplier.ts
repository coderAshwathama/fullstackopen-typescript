// // const multiplicator = (a: number, b: number, printText: string) => {
// //   console.log(printText, a * b);
// // };

// // multiplicator(
// //   "how about a string ? ",
// //   4,
// //   "Multiplied numbers 2 and 4, the result is : ",
// // );

// type Operation = "multiply" | "add" | "divide";
// type Result = string | number;

// const calculator = (a: number, b: number, op: Operation): Result => {
//   //   if (op === "multiply") {
//   //     return a * b;
//   //   } else if (op === "add") a + b;
//   //   else if (op === "divide") {
//   //     if (b === 0) return "can\t divide by 0 ! ";
//   //     return a / b;
//   //   }
//   switch (op) {
//     case "multiply":
//       return a * b;
//     case "divide":
//       if (b === 0) throw new Error("cant divide by 0 !");
//       return a / b;
//     case "add":
//       return a + b;

//     default:
//       throw new Error("Operation is not multiply, add or divide");
//   }
// };

// console.log(calculator(1, 3, "divide"));

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);

multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);
