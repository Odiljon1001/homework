function findTwoLargestNumbers() {
    // Получаем ввод пользователя через prompt и разделяем его на массив чисел
    let input = prompt("Введите числа через запятую:").split(",").map(Number);

    // Проверяем, что введены числа
    if (!input.every(num => !isNaN(num))) {
        return "Ошибка: Пожалуйста, введите только числа.";
    }

    // Сортируем массив чисел по убыванию
    let sortedNumbers = input.sort((a, b) => b - a);

    // Берем первые два элемента (два наибольших числа)
    let largestNumbers = sortedNumbers.slice(0, 2);

    // Возвращаем массив из двух наибольших чисел
    return largestNumbers;
}

// Вызываем функцию и выводим результат в консоль
console.log(findTwoLargestNumbers());
