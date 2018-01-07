const date = new Date();
date.setMonth(date.getMonth() + 1);
date.setDate(0);
const firstDayOfMonth = date.getDay();
console.log(firstDayOfMonth);
