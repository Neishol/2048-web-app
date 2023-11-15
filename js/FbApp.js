function registrar() {
    //console.log('diste un click')
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorcode = error.code;
        var errorMessage = error.message;
        console.log(errorcode);
        console.log(errorMessage);
        registerError(errorMessage)
        //...
    });

}

function ingreso() {
    var email2 = document.getElementById('email2').value;
    var password2 = document.getElementById('password2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        //Handle Errors here.
        var errorcode = error.code;
        var errorMessage = error.message;
        console.log(errorcode);
        console.log(errorMessage);
        loginError(errorMessage);

        //...
    });
}

function loginError(error) {
    $.Zebra_Dialog(error, {
        'type':     'error',
        'title':    '<center>Login Error</center>'
    });
}

function registerError(error) {
    $.Zebra_Dialog(error, {
        'type':     'error',
        'title':    '<center>Register Error</center>'
    });
}

function redi() {
    var redireccion = window.location.href = "index.html";
}

function aparece() {
    var contenido = document.getElementById('contenido');
    contenido.innerHTML = `
    <p>Bienvenido<p>
    <button onclick="cerrar()">Cerrar sesión</button>
    `;
}

function cerrar() {
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...')
    })
    .catch(function(){
        console.log(error);
    })
	redi();
}

function usuarioActivo() {
    
}

//