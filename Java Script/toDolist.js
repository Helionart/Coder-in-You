function liHandler(eventObject) {
    console.log('li clicked:', eventObject.target);
    eventObject.target.remove();
}


function clickHandler(eventObject){
    console.log('> button clicked:', inputElem.value);
    var task = inputElem.value;

    if (task==""){
        return; //return exit the function
    }


    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click',liHandler);


    ulElem.appendChild(liElem);

    inputElem.value = "";
}

var ulElem = document.body.querySelector('#my-todos');
var inputElem = document.body.querySelector('#item');
var addBtnElem = document.body.querySelector('#addBtn');
addBtnElem.addEventListener('click',clickHandler);

