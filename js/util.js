// случайное число с заданным диапазоном min и max включительно
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomArrayElement};
