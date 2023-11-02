const showImageButton = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');
const expandedImage = document.getElementById('expandedImage');

showImageButton.addEventListener('click', function() {

  // Показываем контейнер с картинкой
  imageContainer.style.display = 'flex';
});

// Добавляем обработчик события для закрытия картинки при клике вне контейнера
window.addEventListener('click', function(e) {
  if (e.target === imageContainer) {
    imageContainer.style.display = 'none';
  }
});
