/**
 * Sumar días a una fecha
 * @param {date} date Format new Date()
 * @param {int} days Ejem: 5
 * @returns {date} 
 * */
$.addDays = function (date, days) {
    days = Math.abs(days);
    date.setDate(date.getDate() + days);
    return date;
}

/**
 * Restar días a una fecha
 * @param {date} date Format new Date()
 * @param {int} days Ejem: 5
 * @returns {date} 
 * */
$.substractDays = function (date, days) {
    days = Math.abs(days);
    date.setDate(date.getDate() - days);
    return date;
}

/**
 * Devolver fecha en formato string YYYY-mm-dd
 * @param {date} date Ejem: new Date()
 * @returns {string}
 *  */
$.dateToString = function (date) {
    if (date instanceof Date) {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return [year, month, day].join("-");
    }
}

/**
 * Devuelve nombre de mes de un número (1 al 12)
 * @param {int} number
 * @returns {string} Ejem: Septiembre 
 * */
$.getMonthNameByNum = function (number) {
    const months = {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre"
    };
    const n = parseInt(number);
    return (n >= 1 && n <= 12) ? months[n] : "Undefined";
}

/**
 * Convierte una fecha a texto.
 * @param {string} date Ejem: 2019-09-11
 * @returns {string} Ejem: 11/09/2019
 * */
$.convertDateToString = function (date) {
    const arr = date.split("-");
    if (arr.length === 3) {
        return arr[2] + "/" + arr[1] + "/" + arr[0];
    }
}
