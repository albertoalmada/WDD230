const input_user = document.querySelector("input");

console.log(input_user);

const button = document.querySelector("button");

const list = document.querySelector("ul");

button.addEventListener("click", () => {
    const inputst = document.querySelector("input");
    let storedInput = inputst.value;
    console.log(storedInput);

    document.querySelector("input").value = "";
    const newListItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    newListItem.appendChild(newSpan);
    newSpan.textContent = storedInput;
    newListItem.appendChild(newButton);
    newButton.textContent = "❌";
    list.appendChild(newListItem);

    newButton.addEventListener("click", () => {
        list.removeChild(newListItem);
    });
    input_user.focus();
});

document.querySelector('#year').innerHTML = (new Date().getFullYear());

document.querySelector('#lastUpdate').innerHTML = ` | DOM Activity | Alberto Almada | 
WDD 230 W#05 | Last Updated: ${document.lastModified}`;