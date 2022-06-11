document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = ` | Lazy Load Activity | Alberto Almada | 
WDD 230 W#07 | Last Updated: ${document.lastModified}`;