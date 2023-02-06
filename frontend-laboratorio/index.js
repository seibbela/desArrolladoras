let form = document.getElementById('form');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let contraseña = document.getElementById('password');
let contraseña2 = document.getElementById('password2');
let boton = document.getElementById('boton');

// evento -- boton -- se recibe y llama al metodo
boton.addEventListener('click', e => {
    //preventDefault --  se utiliza en este caso porque es un form sin post, entonces con este evento se queda en la misma pagina.
    e.preventDefault();
    revisarEventos();

});

function revisarEventos(){
    //? .trim() elimina los caracteres en blanco al principio o al final
    let nombreValor = nombre.value.trim(); 
    let emailValor = email.value.trim();
    let contraseñaValor = contraseña.value.trim();
    let contraseña2Valor = contraseña2.value.trim();
    let bolean = true; 

    if (nombreValor === '') {
        enviarError(nombre,"Rellene este campo");
        bolean = false;  
    } else if (!correcionnombre(nombreValor)) {
        enviarError(nombre, 'No puede contener números');
        bolean = false;  
    } else {
        funciona(nombre);
    }

    if (emailValor === '') {
        enviarError(email,"Rellene este campo");
        bolean = false;   
    } else if (!correcionEmail(emailValor)) { 
        enviarError(email, 'Email invalido');
    } else {
        funciona(email);
    }
    console.log(contraseñaValor.length);

    if (contraseñaValor === '') {
        enviarError(contraseña,"Rellene este campo"); 
        bolean = false;  
    } else if (contraseñaValor.length > 8 ) { 
        bolean = false;  
        enviarError(contraseña, 'No debe tener más de 8 caracteres');
    } else {
        funciona(contraseña);
    }

    if (contraseña2Valor === '') {
        enviarError(contraseña2,"Rellene este campo"); 
        bolean = false;  
    } else if (contraseñaValor !== contraseña2Valor) { 
        bolean = false;  
        enviarError(contraseña2, 'Las contraseñas no coinciden');
    } else {
        funciona(contraseña2);
    }

    if (bolean==true) {
        alert('usuario registrado correctamente');
    }
}

function enviarError(input, mensaje) {
    //cogemos el input que sale el error
    let formControl = input.parentElement;
    // buscamos la i del error 
    let error = formControl.querySelector('#error');
    // cambiamos el estilo a visible para que se vea 
    error.style.visibility = 'visible';
    let inputF = formControl.querySelector('input');
    inputF.style.borderColor = 'red';
    let small = formControl.querySelector('small');
    small.style.color = 'red';
    small.style.visibility = 'visible';
    small.innerHTML = mensaje;
}
function funciona(input) {
    let formControl = input.parentElement;
    let error = formControl.querySelector('#error');
        error.style.visibility = 'hidden';
    let small = formControl.querySelector('small');
        small.style.visibility = 'hidden';
    let good = formControl.querySelector('#good');
        good.style.visibility = 'visible'
    let inputF = formControl.querySelector('input');
        inputF.style.borderColor = 'green';
}


function correcionEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function correcionnombre(nombre) {
    return /^\D+$/.test(nombre);
}