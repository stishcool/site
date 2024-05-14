document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы модального окна
    var modal = document.getElementById('modal');
    var modalName = document.getElementById('modal-name');
    var modalDescription = document.getElementById('modal-description');
    var modalImage = document.getElementById('modal-image');

    // Получаем ссылки на изображения персонажей
    var characterImages = document.querySelectorAll('.character-images img');

    // Добавляем обработчик события клика для каждого изображения
    characterImages.forEach(function(image) {
        image.addEventListener('click', function() {
            // Получаем информацию о персонаже из атрибутов данных
            var name = this.getAttribute('data-name');
            var description = this.getAttribute('data-description');
            var imageSrc = this.getAttribute('data-image');

            // Обновляем содержимое модального окна
            modalName.textContent = name;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;

            // Отображаем модальное окно
            modal.style.display = 'block';
        });
    });

    // Добавляем обработчик события клика для закрытия модального окна
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

