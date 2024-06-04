// script.js

document.addEventListener('DOMContentLoaded', function () {
    const input1 = document.getElementById('input1');
    const calculateButton = document.getElementById('calculate');
    const result = document.getElementById('result');
    const clothesButton = document.getElementById('clothes');
    const shoesButton = document.getElementById('shoes');

    calculateButton.addEventListener('click', function () {
        const inputValue = parseFloat(input1.value);
        const selectedButton = document.querySelector('.calculation-button.selected');

        if (!selectedButton) {
            result.textContent = 'Выберите тип расчета';
            return;
        }

        const selectedCalculation = selectedButton.id;

        if (isNaN(inputValue)) {
            result.textContent = 'Введите число';
            return;
        }
        curse = 13.30
        shipchina = curse * 10
        let calculation;
        if (selectedCalculation === 'clothes') {
            const increasedValue = inputValue * 1.05;
            calculation = (increasedValue * curse) + 1500 + shipchina;
        } else if (selectedCalculation === 'shoes') {
            const increasedValue = inputValue * 1.05;
            calculation = (increasedValue * curse) + 2000 + shipchina;
        }

        const roundedCalculation = calculation.toFixed(2);
        result.innerHTML = `Стоимость с доставкой до ПВЗ <img src="cdek.png" alt="icon" style="width: 40px; vertical-align: middle;">: ${roundedCalculation}₽`;
    });

    function selectButton(button) {
        clothesButton.classList.remove('selected');
        shoesButton.classList.remove('selected');
        button.classList.add('selected');
    }

    clothesButton.addEventListener('click', function () {
        selectButton(this);
    });

    shoesButton.addEventListener('click', function () {
        selectButton(this);
    });

    // Прокрутка при фокусе на инпуте
    input1.addEventListener('focus', function () {
        document.querySelector('.calculator').scrollIntoView({ behavior: 'smooth' });
    });
});

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
