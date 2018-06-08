function createBottle() {
    var imgElem = document.createElement('img');
imgElem.setAttribute('src','/images/beer.png');
imgElem.classList.add('small-bottle');
return(imgElem);
}

//create an image - not in the DOM yet
//var imgElem = document.createElement('img');

//Decorate the element
//imgElem.setAttribute('src','/images/beer.png');
//imgElem.classList.add('small-bottle');

//Find the place to add the element
var hereElem = document.body.querySelector('#here');

//attach the file to the place
//hereElem.appendChild(imgElem);

for (var i = 0; i <100; i++) {
    var bottle = creatBottle();
    hereElem.appendChild(imgElem);
}
