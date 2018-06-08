

function createBottles(numOfBottles){
var divElem = docment.createElement('div');

for (var i = 0; i < numOfBottles; i ++) {
    //create the image
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', 'https://drizly-products1.imgix.net/ci-miller-lite-0d8edf99a2666436.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20');
    imgElem.classList.add('small');
    //append it to div
    divElem.appendChild(imgElem);
}
return(divElem);
}


//<div> some text</div>

function createText(line){
    var divElem = document.createElement('div');
    divElem.textContent = line;
    return (divElem);
}

var bearSongElem = document.body.querySelector('#beer-song');

for (var i = 99; i > 0; i--){
    var pElem = document.createElement('p');
    var bottles = createBottles(i);
    pElem.appendChild(bootles);
    var text = createText(`${i} bottles of beer on the wall, ${i} bottles of beer`);
    pElem.appendChild(text);
    var text = createText(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    pElem.appendChild(text);
    bearSongElem.appendChild(pElem);
}
