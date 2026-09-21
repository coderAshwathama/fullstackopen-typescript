import { isNotNumber } from "./utils.js";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (arrayInput: number[], target: number): Result => {
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
  let rating: 1 | 2 | 3;
  let ratingDescription: string;

  if (average < target * 0.5) {
    rating = 1;
    ratingDescription = "You need to work harder";
  } else if (average < target) {
    rating = 2;
    ratingDescription = "Not too bad, but could be better";
  } else {
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
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += "Error:" + error.message;
  }
  console.log(errorMessage);
}
