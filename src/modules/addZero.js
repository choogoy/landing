// функция добавляет "0" если число меньше 10
const addZero = num => {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
};

export default addZero;