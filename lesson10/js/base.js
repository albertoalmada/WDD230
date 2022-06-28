document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = ` | Weather API Activity | Alberto Almada | 
WDD 230 W#10 | Last Updated: ${document.lastModified}`;