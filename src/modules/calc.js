import animate from './animate';

const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;
        const squareValue = +calcSquare.value;
        const typeValue = parseFloat(calcType.options[calcType.selectedIndex].value);

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                totalValue.textContent = Math.round(total * progress);
            }
        });
    };

    calcBlock.addEventListener('change', event => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });

    const validCalc = () => {
        calcBlock.addEventListener('input', event => {
            const input = event.target.closest('input');
            if (input) {
                input.value = input.value.replace(/\D/gi, '').replace(/^0/gi, ''); // только цифры и первая не ноль 
            }
        });
    };

    validCalc();
};

export default calc;