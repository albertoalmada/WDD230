document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = ` | DOM Activity | Alberto Almada | 
WDD 230 W#05 | Last Updated: ${document.lastModified}`;