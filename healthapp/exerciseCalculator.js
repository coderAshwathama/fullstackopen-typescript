import { isNotNumber } from "./utils.js";
const calculateExercises = (arrayInput, target) => {
    const periodLength = arrayInput.length;
    let trainingDays = 0;
    let sum = 0;
    for (let i = 0; i < periodLength; i++) {
        if (arrayInput[i] !== 0) {
            trainingDays++;
        }
        sum += arrayInput[i];
    }
    const average = sum / periodLength;
    const success = average >= target;
    let rating;
    let ratingDescription;
    if (average < target * 0.5) {
        rating = 1;
        ratingDescription = "You need to work harder";
    }
    else if (average < target) {
        rating = 2;
        ratingDescription = "Not too bad, but could be better";
    }
    else {
        rating = 3;
        ratingDescription = "Excellent work!";
    }
    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average,
    };
};
try {
    const { target, trainingDays } = isNotNumber(process.argv);
    console.log(calculateExercises(trainingDays, target));
}
catch (error) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
        errorMessage += "Error:" + error.message;
    }
    console.log(errorMessage);
}
