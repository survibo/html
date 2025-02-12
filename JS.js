document.getElementById('addListButton').addEventListener('click', function() {
    let inputValue = document.getElementById('addList').value;
    document.getElementById('addList').value = '';

    if (inputValue ==='') {
        return;
    }

    let idToDoList = document.getElementById('toDoList');

    let createContainer = document.createElement('div');
    setStyleContainer(createContainer)

    idToDoList.appendChild(createContainer);

    let createList = document.createElement('div');
    createList.textContent = inputValue;
    createList.style.fontSize = 'large';
    createContainer.appendChild(createList);

    let createButton = document.createElement('button');
    setStyleButton(createButton);
    createButton.addEventListener('click', function() {
        createList.style.textDecoration = 'line-through';
        createList.style.color = 'gray';
    })
    createContainer.appendChild(createButton);
});

function setStyleContainer(target) {
    target.style.display = 'flex';
    target.style.border = '2px solid gray';
    target.style.padding = '2px';
    target.style.margin = '2px';
    target.style.height = 'fit-content';
    target.style.transform = 'translateY(50px)';
}

function setStyleButton (target) {
    target.textContent = '✓';
    target.style.marginLeft = 'auto';
    target.style.width = '25px';
    target.style.height = '25px';
    target.style.backgroundColor = 'white';
    target.style.border = '2px solid gray';
    target.style.color = 'gray';
}
