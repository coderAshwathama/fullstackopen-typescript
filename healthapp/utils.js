export const isNotNumber = (args) => {
    //   if (args.length < 10) throw new Error("Not enough arguements");
    //   if (args.length > 10) throw new Error("Too many arguements");
    const values = args.slice(2).map(Number);
    if (values.length < 2) {
        throw new Error("Not enough arguments");
    }
    if (values.some((value) => Number.isNaN(value))) {
        throw new Error("Provided Values were not Numbers !");
    }
    const target = values[0];
    const trainingDays = values.slice(1);
    return {
        target,
        trainingDays,
    };
};
