function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            //User is signed in.
            console.log('Existe usuario activo');
            var mostrar = document.getElementById('cacheda');
            mostrar.innerHTML = "Usuario = ";
            //aparece();
            redi();
            var displayname = user.displayname;
            var email = user.email; 
            console.log(email);
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            //...
        } else {
            //User is singed out.
            console.log('no existe usuario activo');
            //...
        }
    });
}
function redi() {
    var redireccion = window.location.href = "lobby.html";
}
observador()