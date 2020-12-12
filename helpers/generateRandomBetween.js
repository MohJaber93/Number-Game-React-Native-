export default function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min); // to insure that's is an integer and round it up
  max = Math.floor(max); // to insure that's is an integer and round it down
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}
