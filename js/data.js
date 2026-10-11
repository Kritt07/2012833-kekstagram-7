import {getRandomNumber, getRandomArrayElement} from './util.js';

/*
  id, число — идентификатор опубликованной фотографии.
  Это число от 1 до 25. Идентификаторы не должны повторяться.

  url, строка — адрес картинки вида photos/{{i}}.jpg,
  где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

  description, строка — описание фотографии.

  likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

  comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
  Количество комментариев к каждой фотографии — случайное число от 0 до 30.

  avatar, строка — адрес аватарки пользователя.
  строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
  Аватарки подготовлены в директории img.

  message, строка — текст комментария.
  одно или два предложения из messages

  name, строка — имя пользователя.
*/

const LIKE_MAX_COUNT = 200;
const LIKE_MIN_COUNT = 15;
const ID_MAX_COUNT = 25;
const URL_MAX_COUNT = 25;
const COMMENT_MAX_COUNT = 30;
const IDS_RANGE = 100;
const RANDOM_IMG_RANGE = 6;

const names = [
  'Артем',
  'Виктор',
  'Иван',
  'Дмитрий',
  'Сергей',
  'Александр'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// функция, которая создает массив из 25 сгенерированных JS объектов
const createComment = (comments) => {
  let ids = Array.from({ length: IDS_RANGE }, (_, j) => j);

  for (let i = 0; i < getRandomNumber(0, COMMENT_MAX_COUNT); i++) {
    const id = getRandomArrayElement(ids);
    ids = ids.filter((x) => x !== id);
    const avatar = `img/avatar-${getRandomNumber(1, RANDOM_IMG_RANGE)}.svg`;
    const message = getRandomArrayElement(messages);
    const name = getRandomArrayElement(names);

    comments.push({
      id: id,
      avatar: avatar,
      message: message,
      name: name
    });
  }
};

// основная функция, которая создает массив из 25 сгенерированных JS объектов
const createDescriptionsPhoto = () => {
  const descriptions = [];

  for (let i = 1; i <= ID_MAX_COUNT; i++) {
    const id = getRandomNumber(1, ID_MAX_COUNT);
    const url = `photos/${getRandomNumber(1, URL_MAX_COUNT)}.jpg`;
    const description = 'Очень красивые котики!';
    const likes = getRandomNumber(LIKE_MIN_COUNT, LIKE_MAX_COUNT);
    const comments = [];

    createComment(comments);

    descriptions.push({
      id: id,
      url: url,
      description: description,
      likes: likes,
      comments: comments
    });
  }

  return descriptions;
};

export {createDescriptionsPhoto};
