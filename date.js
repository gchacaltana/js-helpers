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
