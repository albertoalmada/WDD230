document.getElementById('today').innerHTML = Date();


document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = `Minersville Chamber of Commerce | Alberto Parreira Almada | 
WDD 230 Project |<br> Last Updated: ${document.lastModified}`;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}