const datefieldUK = document.querySelector(".today"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = `Minersville Chamber of Commerce | Alberto Parreira Almada | 
WDD 230 Project |<br> Last Updated: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("firstNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/*banner at the top of webpage */
const today = now.getDay();
const chambermeeting = document.getElementById("chambermeeting");
if(today === 1 || today === 2) {
    chambermeeting.style.display = "block";
}
else {
    chambermeeting.style.display = "none";
}

/*if click on the X in the banner is closes it */
const closems = document.querySelector("#closems");

closems.addEventListener("click", () => {
    chambermeeting.style.display = "none";
});
