import getRandomNumber from '../utilities.js';
import logic from '../index.js';

const question = 'What number is missing in the progression?';

const gamesRule = () => {
  const firstProgrNumber = getRandomNumber();
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 100);
  const getRandomIndex = getRandomNumber(0, progressionLength);

  const getRandomProgression = (firstNumber, step, length) => {
    const randomProgression = [];
    randomProgression[0] = firstNumber;
    for (let i = 1; i < length; i += 1) {
      randomProgression[i] = randomProgression[i - 1] + step;
    }
    return randomProgression;
  };

  const progression = getRandomProgression(firstProgrNumber, progressionStep, progressionLength);
  const hiddenNumber = progression[getRandomIndex].toString();
  progression[getRandomIndex] = '..';
  const expectedAnswer = hiddenNumber;
  const questionProgression = progression.join(' ');

  return [questionProgression, expectedAnswer];
};

const progressionGame = () => {
  logic(question, gamesRule);
};

export default progressionGame;
