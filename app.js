var radiusString = [0, 0, 0, 0];

function increase(num) {
    if (radiusString[num] < 50) {
        radiusString[num] = Number(radiusString[num]) + 1;
        document.getElementById('corner' + num).value = radiusString[num];
        redrawShape();
    };
    
}

function decrease(num) {
    if (radiusString[num] > 0) {
        radiusString[num] -= 1;
        document.getElementById('corner' + num).value = radiusString[num];
        redrawShape();
    };
}

function keyPress(event) {
    if (event.which === 13 || event.keyCode === 13) {
        var enteredValue;
        var idString = event.target.id;
        cornerNumber = idString.charAt(idString.length - 1);
        enteredValue = document.getElementById('corner' + cornerNumber).value;
        
        if (isNaN(enteredValue) || enteredValue < 0 || enteredValue > 50) {
            document.getElementById('corner' + cornerNumber).value = "0";
            return;
        } else {
            radiusString[cornerNumber] = enteredValue;
            redrawShape();
        }
    };
};


function redrawShape () {
    document.querySelector('.shape').style.borderRadius = radiusString[0] + 'px ' + 
    radiusString[1] + 'px ' + radiusString[2] + 'px ' + radiusString[3] + 'px';
};

function copy() {
    var input = document.createElement('textarea');
    input.innerHTML = 'border-radius: ' + radiusString[0] + 'px ' + 
    radiusString[1] + 'px ' + radiusString[2] + 'px ' + radiusString[3] + 'px;';
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}

function reset() {
    radiusString = [0, 0, 0, 0];
    redrawShape();
    for (var i = 0; i < 4; i++) {
        document.getElementById('corner' + i).value = 0;
    }

}