
const styles = ['style0.css','style1.css', 'style2.css', 'style3.css', 'style4.css', 'style5.css', 'style6.css']; // Массив с путями к стилям
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
// const face = document.getElementById('face');

// // Добавляем слушатель события hover
// face.addEventListener('mouseleave', function () {
//     // После первого наведения добавляем класс, предотвращающий анимацию в будущем
//     face.classList.remove('initialized');
// });
const face = document.getElementById('brows2');

// Добавляем слушатель события ухода курсора с блока
face.addEventListener('mouseleave', function () {
    // После первого ухода курсора добавляем класс, чтобы включить анимации
    face.classList.remove('initialized');
});
face.addEventListener('click', function () {
    face.classList.add('initialized');
});
