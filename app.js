var radiusString = [0, 0, 0, 0];


function increase(num) {
    if (radiusString[num] < 50) {
        radiusString[num] += 1;
        document.getElementById('corner' + num).value = radiusString[num];
        document.querySelector('.shape').style.borderRadius = radiusString[0] + 'px ' + 
        radiusString[1] + 'px ' + radiusString[2] + 'px ' + radiusString[3] + 'px';
    };
    
}

function decrease(num) {
    if (radiusString[num] > 0) {
        radiusString[num] -= 1;
        document.getElementById('corner' + num).value = radiusString[num];
        document.querySelector('.shape').style.borderRadius = radiusString[0] + 'px ' + 
        radiusString[1] + 'px ' + radiusString[2] + 'px ' + radiusString[3] + 'px';
    };
}

function keyPress(event) {
    if (event.which === 13 || event.keyCode === 13) {
        var enteredValue;
        var idString = event.target.id;
        cornerNumber = idString.charAt(idString.length - 1);
        enteredValue = document.getElementById('corner' + cornerNumber).value;
        
        if (enteredValue >= 0 && enteredValue < 51) {
            ;
        };
    }
};


function redrawShape (newValue) {

};
/*
radiusString[num] = 
    document.querySelector('.shape').style.border-radius = radiusString;
*/