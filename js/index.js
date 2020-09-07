//llamar a los elementos del html
const btnNext = document.querySelector(".btn-next");
const btnPrevious = document.querySelector(".btn-previous");
//seleccionar todos los elementos que tengan la clase slider
const slider = document.querySelectorAll(".slider");
const text = document.querySelector(".text");

//creamos una variable que permitira el uso de cada slider
let imagenNum = 1;
//condicion inicial (inicio de la pagina)
if (imagenNum == 1) {
    slider[1].style.display = 'none';
    slider[2].style.display = 'none';
    slider[3].style.display = 'none';
    btnPrevious.classList.add('hide');
}

//funcion click para boton Next
btnNext.addEventListener("click", function () {
    //invocacion de funciones con sus parametros
    imagenNum = increase(imagenNum);
    showImageSlider(imagenNum);
});

//funcion click para boton Previous
btnPrevious.addEventListener("click", function () {
    //invocacion de funciones con sus parametros
    imagenNum = decrease(imagenNum);
    showImageSlider(imagenNum);
});

//funcion para disminuir el numero del Slider
function decrease(numSlider) {
    return --numSlider;
}

//funcion para aumentar el numero del Slider
function increase(numSlider) {
    return ++numSlider;
}

//funcion para mostrar las imagenes del slider
function showImageSlider(imagenNum) {
    //condiciones para mostrar los divs segun correspondan a cada numSlider
    if (imagenNum == 1) {
        slider[0].style.display = 'block'
        slider[1].style.display = 'none';
        slider[2].style.display = 'none';
        slider[3].style.display = 'none';
        //ocultar boton de previous
        btnPrevious.classList.add('hide');
    } else if (imagenNum == 2) {
        slider[1].style.display = 'block'
        slider[0].style.display = 'none';
        slider[2].style.display = 'none';
        slider[3].style.display = 'none';
        btnNext.classList.remove('hide');
        btnPrevious.classList.remove('hide');
    } else if (imagenNum == 3) {
        slider[2].style.display = 'block'
        slider[0].style.display = 'none';
        slider[1].style.display = 'none';
        slider[3].style.display = 'none';
        btnNext.classList.remove('hide');
    } else if (imagenNum == 4) {
        slider[3].style.display = 'block'
        slider[0].style.display = 'none';
        slider[1].style.display = 'none';
        slider[2].style.display = 'none';
        //ocultar boton de Next
        btnNext.classList.add('hide');
    }
}