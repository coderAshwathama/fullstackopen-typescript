interface arrayInput {
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  value6: number;
  value7: number;
  value8: number;
}

export const isNotNumber = (args: number[]): arrayInput => {
  if (args.length < 8) throw new Error("Not enough arguements");
  if (args.length > 8) throw new Error("Too many arguements");
  if (
    !isNaN(Number(args[2])) &&
    !isNaN(Number(args[3])) &&
    !isNaN(Number(args[4])) &&
    !isNaN(Number(args[5])) &&
    !isNaN(Number(args[6])) &&
    !isNaN(Number(args[7])) &&
    !isNaN(Number(args[8])) &&
    !isNaN(Number(args[9]))
  ) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
      value3: Number(args[4]),
      value4: Number(args[5]),
      value5: Number(args[6]),
      value6: Number(args[7]),
      value7: Number(args[8]),
      value8: Number(args[9]),
    };
  } else {
    throw new Error("Provided values were not numbers !");
  }
};
