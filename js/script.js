function validar(){
    let nombre = document.querySelector("#nombre").value;
    if (nombre == 0){ alert("Complete el Nombre");}

    let email = document.querySelector("#email").value;
    if (email == 0){ alert("Complete el email");}

    let mensaje = document.querySelector("#mensaje").value;
    if (mensaje == 0){ alert("Escriba un mensaje");}
}

function validarRegistro(){
    let nombre = document.querySelector("#exampleInputEmail1").value;
    if (nombre == 0){ alert("Complete el Email");}

    let email = document.querySelector("#exampleInputPassword1").value;
    if (email == 0){ alert("Complete la contraseña");}

}

/* const carrusel = document.querySelector("#conteItemsCarrusel")

const  */