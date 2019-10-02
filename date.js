/**
 * Sumar días a una fecha
 * @param {date} date. Format new Date()
 * @param {int} days Ejem: 5
 * @returns {date} 
 * */
$.addDays = function (date, days) {
    days = Math.abs(days);
    date.setDate(date.getDate() + days);
    return date;
}
