
const styles = ['style0.css','style1.css', 'style2.css', 'style3.css', 'style4.css', 'style5.css', 'style6.css', 'style7.css']; // Массив с путями к стилям
let currentStyleIndex = 0; // Индекс текущего стиля

document.getElementById('eyes').addEventListener('click', function () {
    currentStyleIndex++; // Увеличиваем индекс на 1
    // Если индекс больше, чем количество стилей в массиве, сбрасываем его на 0
    if (currentStyleIndex >= styles.length) {
        currentStyleIndex = 0;
    }

    const stylesheet = document.getElementById('stylesheet');
    // Устанавливаем новый href в зависимости от текущего индекса
    stylesheet.setAttribute('href', styles[currentStyleIndex]);
});
const face = document.getElementById('brows2');

// Добавляем слушатель события ухода курсора с блока
face.addEventListener('mouseleave', function () {
    // После первого ухода курсора добавляем класс, чтобы включить анимации
    face.classList.remove('initialized');
});
face.addEventListener('click', function () {
    face.classList.add('initialized');
});


const eyesElement = document.getElementById('eyes');
const stylesheet = document.getElementById('stylesheet');
const pupil1 = document.getElementById('leftEye');
const pupil2 = document.getElementById('rightEye');

let isStyle7Active = false; // Флаг для отслеживания активности стиля style7.css
let mouseMoveHandler; // Переменная для хранения обработчика движения мыши

// Функция для движения зрачков
function movePupil(pupil, x, y, intensity) {
    const rect = pupil.parentElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 4;
    const centerY = rect.top + rect.height / 4;

    // Вычисляем направление движения
    const deltaX = (x - centerX) / rect.width;
    const deltaY = (y - centerY) / rect.height;

    // Ограничиваем движение зрачка
    const maxMovement = 20; // максимальное смещение
    const newX = Math.min(Math.max(deltaX * maxMovement * intensity, -maxMovement), maxMovement);
    const newY = Math.min(Math.max(deltaY * maxMovement * intensity, -maxMovement), maxMovement);

    // Устанавливаем новые координаты зрачка
    pupil.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Обработчик клика по элементу "eyes"
eyesElement.addEventListener('click', function () {

    // Меняем файл стилей
    stylesheet.setAttribute('href', styles[currentStyleIndex]);

    // Проверяем, подключен ли файл style7.css
    if (stylesheet.getAttribute('href') === 'style7.css') {
        alert("Подвигай мышкой на следующей странице");

        // Если ранее не был активирован стиль style7.css
        if (!isStyle7Active) {
            // Добавляем обработчик движения мыши
            mouseMoveHandler = (event) => {
                const mouseX = event.clientX;
                const mouseY = event.clientY;

                // Двигаем зрачки
                movePupil(pupil1, mouseX, mouseY, 1.2); // Дальний глаз двигается сильнее
                movePupil(pupil2, mouseX, mouseY, 1);   // Ближний глаз двигается слабее
            };
            document.addEventListener('mousemove', mouseMoveHandler);
            isStyle7Active = true; // Обновляем флаг активности
        }
    } else {
        // Если стиль style7.css не активен, отключаем обработчик движения мыши
        if (isStyle7Active) {
            document.removeEventListener('mousemove', mouseMoveHandler);
            isStyle7Active = false; // Обновляем флаг активности
        }
    }
});




