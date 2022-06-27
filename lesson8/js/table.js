const newDate = new Date();

const month = newDate.getMonth() + 1;
const day = newDate.getDate();
const year = newDate.getFullYear();

document.querySelector("#date").innerHTML = month + "." + day + "." + year