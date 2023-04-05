export function getImageTemplate({
  webformatURL,
  largeImageURL,

}) {
  return `
  <div class="photo-card">
    <a class="gallery__item" href="${largeImageURL}">
      <img class="gallery__image" src=${webformatURL} loading="lazy" />
    </a>
  </div>`;
}