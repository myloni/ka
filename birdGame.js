// Основной объект птицы
var bird = {
    x: 50,
    y: 300,
    width: 30,
    height: 20,
    color: 'blue',
    speed: 5,
    draw: function() {
        // Отрисовка птицы
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    },
    update: function() {
        // Обновление состояния птицы (движение, проверки и т.д.)
        this.x += this.speed;
        if (this.x > canvas.width) {
            this.x = -this.width; // вернуть птицу на экран, если она вышла за пределы
        }
    }
};

// Получаем контекст холста
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
document.body.appendChild(canvas);

// Начальная функция
function startGame() {
    bird.draw(); // отрисовка птицы
}

// Обновление игры
function updateGame() {
    bird.update(); // обновление состояния птицы
}

// Запуск игры
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height); // очистка экрана
    updateGame(); // обновление игры
    startGame(); // отрисовка элементов
    requestAnimationFrame(gameLoop); // продолжение цикла анимации
}

// Запуск цикла анимации
gameLoop();
