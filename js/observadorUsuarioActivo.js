function observadorActivo() {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
			
            //User is signed in.
            console.log('Existe usuario activo');
            var email = user.email;
            var userName = "";
            userName = email.split('@', 1);
            var mostrar = document.getElementById('user');
            mostrar.innerHTML = userName;
            var displayname = user.displayname;
            console.log(displayname);
            //...
        } else {
            //User is singed out.
            console.log('no existe usuario activo');
					
											
        }
    });
	
}
observadorActivo()