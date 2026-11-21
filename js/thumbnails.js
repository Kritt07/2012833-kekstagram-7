const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({url, description, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    const image = picture.querySelector('.picture__img');

    image.src = url;
    image.alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;

    fragment.append(picture);
  });

  picturesContainer.append(fragment);
};

export {renderThumbnails};
