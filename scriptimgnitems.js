document.addEventListener('DOMContentLoaded', function() {
    // Функция для открытия модального окна
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (!modal) {
            // Создаем новое модальное окно, если его нет на странице
            modal = document.createElement('div');
            modal.id = modalId;
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2 id="${modalId}-name"></h2>
                    <p id="${modalId}-description"></p>
                    <img id="${modalId}-image" src="" alt="">
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        var modalName = document.getElementById(modalId + '-name');
        var modalDescription = document.getElementById(modalId + '-description');
        var modalImage = document.getElementById(modalId + '-image');

        // Отображаем модальное окно
        modal.style.display = 'block';

        // Добавляем обработчик события клика для закрытия модального окна
        var closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        return { modal, modalName, modalDescription, modalImage };
    }

    // Получаем ссылки на изображения нейтральных предметов
    var neutralItemImages = document.querySelectorAll('.neutral_items-images img');

    // Добавляем обработчик события клика для каждого изображения нейтрального предмета
    neutralItemImages.forEach(function(image) {
        image.addEventListener('click', function() {
            // Получаем информацию о предмете из атрибутов данных
            var name = this.getAttribute('data-name');
            var description = this.getAttribute('data-description');
            var imageSrc = this.getAttribute('data-image');

            // Открываем модальное окно и сохраняем ссылки на его элементы
            var { modal, modalName, modalDescription, modalImage } = openModal('modal');

            // Обновляем содержимое модального окна
            modalName.textContent = name;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;
        });
    });
});
