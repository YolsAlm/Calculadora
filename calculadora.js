
function sumar(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        const error = document.querySelector('.resultado');
        error.classList.add("alert", "alert-danger");
        resultado.innerHTML='Introduce los números';
    }
    else {
        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1 + n2;
        resultado.innerHTML='La suma de: ' + n1 + ' + ' + n2 + ' es ' + total;
        const correcto = document.querySelector('.resultado');
        correcto.classList.add("alert", "alert-success");
    }
}

function restar(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        resultado.innerHTML='Introduce los números';
        const error = document.querySelector('.resultado');
        error.classList.add("alert", "alert-danger");
    }
    else {
        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1 - n2;
        resultado.innerHTML='La resta de: ' + n1 + ' - ' + n2 + ' es ' + total;
        const correcto = document.querySelector('.resultado');
        correcto.classList.add("alert", "alert-success");
    }
}

function multiplicar(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        resultado.innerHTML='Introduce los números';
        const error = document.querySelector('.resultado');
        error.classList.add("alert", "alert-danger");
    }
    else {
        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1 * n2;
        resultado.innerHTML='La multiplicación de: ' + n1 + ' x ' + n2 + ' es ' + total;
        const correcto = document.querySelector('.resultado');
        correcto.classList.add("alert", "alert-success");
    }
}

function dividir(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        resultado.innerHTML='Introduce los números';
        const error = document.querySelector('.resultado');
        error.classList.add("alert", "alert-danger");
    }
    else {
        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1 / n2;
        resultado.innerHTML='La division de: ' + n1 + ' / ' + n2 + ' es ' + total;
        const correcto = document.querySelector('.resultado');
        correcto.classList.add("alert", "alert-success");
    }
}