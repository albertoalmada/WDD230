const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const currentYear = now.getFullYear();

document.querySelector(".currentDate").innerHTML = fullDate;


document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = `Minersville Chamber of Commerce | Alberto Parreira Almada | 
WDD 230 Project |<br> Last Updated: ${document.lastModified}`;

/*function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}*/

const today = now.getDay();
const chambermeeting = document.getElementById("today");
if(today === 1 || today === 2) {
    chambermeeting.style.display = "block";
}
else {
    chambermeeting.style.display = "none";
}