	var tamano = sessionStorage.getItem('tamano');
	var min = 0;
	var max = tamano - 1;
	
	var SeMovio = false;
	var score = 0;
	
	function cambiarModo(){
		new $.Zebra_Dialog(
			"<center>Elija el modo que desee<center>",
			{
				type: "",
				title: "<center>Modos</center>",
				buttons: [
					{caption: "Facil", callback: function() {
						tamano = 3;
						max = tamano - 1;
						var pete = document.getElementById('tamano');
						console.log(pete);
						return load();
					}},
					{caption: "Normal", callback: function() {
						tamano = 4;
						max = tamano - 1;
						return load();
					}},
					{caption: "Dificil", callback: function() {
						tamano = 5;
						max = tamano - 1;
						return load();
					}},
				]
			}
		);
	}
	
	function cambiarModoLobby(){

	}

	function load() {
		var html = '<table id="t01" border="1">';
		for(var fila=0;fila<tamano;fila++) {
			html += '<tr>';
			for(var col=0;col<tamano;col++) {
				var coord = fila+""+col;
				html += '<td align="center" valign="center" height="80" width="80" id="'+coord+'"></td>';
			}
			html += '</tr>';
		}
		html += '</table>';
		document.getElementById("canvas").innerHTML = html;

		var coord1 = NuevaCoord();
		var coord2 = "";
		while(true) {
			coord2 = NuevaCoord();
			if(coord1 != coord2)
			break;
		}
		document.getElementById(coord1).innerHTML = "2";
		document.getElementById(coord2).innerHTML = "2";

		document.getElementById(coord1).style.backgroundColor = Colores(2);
		document.getElementById(coord2).style.backgroundColor = Colores(2);
		
		score = 0;
		document.getElementById("score").innerHTML = score;

	}
	function numRandom()
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	function NuevaCoord()
	{
		var i = numRandom();
		var j = numRandom();
		return i+""+j;
	}
	function up() {
		SeMovio = false;
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=max;i++) {
				var coord = i+""+j;
				if(document.getElementById(coord).innerHTML != "") {
					moveUp(coord);
				}
			}
		}
		if(SeMovio == true) {
			update();
		}
	}
	function moveUp(coord) {		
		if(!empiezaCon(coord, min)) {
			var i = parseInt(coord[0]);
			var j = parseInt(coord[1]);
			for(var k=(i-1);k>=min;k--) {
				var nCoord = k+""+j;
				if(document.getElementById(nCoord).innerHTML != "") {
					var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nCoord).innerHTML);
					if(val == nVal) {
							document.getElementById(nCoord).innerHTML = (val+nVal);
							document.getElementById(nCoord).style.backgroundColor = Colores((val+nVal));
							document.getElementById((k+1)+""+j).innerHTML = "";
							document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
							SeMovio = true;
							score += (val+nVal);
						break;
					}
				}
				else {
					document.getElementById(nCoord).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
					document.getElementById(nCoord).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
					document.getElementById((k+1)+""+j).innerHTML = "";
					document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
					SeMovio = true;
				}
			}
		}
	}
	function left() {
		SeMovio = false;
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var coord = i+""+j;
				if(document.getElementById(coord).innerHTML != "") {
					moveLeft(coord);
				}
			}
		}
		if(SeMovio == true) {
			update();
		}
	}
	function moveLeft(coord) {
		if(!terminaCon(coord, min)) { 
			var i = parseInt(coord[0]);
			var j = parseInt(coord[1]);
			for(var k=(j-1);k>=min;k--) {
				var nCoord = i+""+k;
				if(document.getElementById(nCoord).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
					var nVal = parseInt(document.getElementById(nCoord).innerHTML);
					if(val == nVal) {
							document.getElementById(nCoord).innerHTML = (val+nVal);
							document.getElementById(nCoord).style.backgroundColor = Colores((val+nVal));
							document.getElementById(i+""+(k+1)).innerHTML = "";
							document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
							SeMovio = true;
							score += (val+nVal);
						break;
					}
				}
				else {
					document.getElementById(nCoord).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
					document.getElementById(nCoord).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
					document.getElementById(i+""+(k+1)).innerHTML = "";
					document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
					SeMovio = true;
				}
			}
		}
	}
	function down() {
		SeMovio = false;
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var coord = j+""+i;
				if(document.getElementById(coord).innerHTML != "") {
					moveDown(coord);
				}
			}
		}
		if(SeMovio == true) {
			update();
		}
	}
	function moveDown(coord) {
		if(!empiezaCon(coord, max)) {
			var i = parseInt(coord[0]);
			var j = parseInt(coord[1]);
			for(var k=(i+1);k<=max;k++) {
				var nCoord = k+""+j;
				if(document.getElementById(nCoord).innerHTML != "") {
					var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nCoord).innerHTML);
					if(val == nVal) {
							document.getElementById(nCoord).innerHTML = (val+nVal);
							document.getElementById(nCoord).style.backgroundColor = Colores((val+nVal));
							document.getElementById((k-1)+""+j).innerHTML = "";
							document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
							SeMovio = true;
							score += (val+nVal);
						break;
					}
				}
				else {
					document.getElementById(nCoord).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
					document.getElementById(nCoord).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
					document.getElementById((k-1)+""+j).innerHTML = "";
					document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
					SeMovio = true;
				}
			}
		}
	}
	function right() {
		SeMovio = false;
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var coord = i+""+j;
				if(document.getElementById(coord).innerHTML != "") {
					moveRight(coord);
				}
			}
		}
		if(SeMovio == true) {
			update();
		}
	}
	function moveRight(coord) {
		if(!terminaCon(coord, max)) {
			var i = parseInt(coord[0]);
			var j = parseInt(coord[1]);
			for(var k=(j+1);k<=max;k++) {
				var nCoord = i+""+k;
				if(document.getElementById(nCoord).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
					var nVal = parseInt(document.getElementById(nCoord).innerHTML);
					if(val == nVal) {
							document.getElementById(nCoord).innerHTML = (val+nVal);
							document.getElementById(nCoord).style.backgroundColor = Colores((val+nVal));
							document.getElementById(i+""+(k-1)).innerHTML = "";
							document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
							SeMovio = true;
							score += (val+nVal);
						break;
					}
				}
				else {
					document.getElementById(nCoord).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
					document.getElementById(nCoord).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
					document.getElementById(i+""+(k-1)).innerHTML = "";
					document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
					SeMovio = true;
				}
			}
		}
	}
	function update() {		
		var coordenadasVacias = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var coord = i+""+j;
				if(document.getElementById(coord).innerHTML == "") {
					coordenadasVacias.push(coord);
				}
			}
		}
		var coord = coordenadasVacias[Math.floor(Math.random()*coordenadasVacias.length)];
		document.getElementById(coord).innerHTML = "2";
		document.getElementById(coord).style.backgroundColor = Colores(2);

		var todoOcupado = true;
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var coord = i+""+j;
				if(document.getElementById(coord).innerHTML == "") {
					todoOcupado = false;
					break;
				}
			}
		}		
		document.getElementById("score").innerHTML = score;
		if(todoOcupado) {
			checkeaGameOver();
		}
	}

	function checkeaGameOver() {
		var perdiste = true;
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=(max-1);i++) {
				var val = parseInt(document.getElementById(i+""+j).innerHTML);
				var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
				if(val == nVal) {
					perdiste = false;
					break;
				}
			}
		}		
		if(perdiste == true) {
			for(var i=min;i<=max;i++) {
				for(var j=min;j<=(max-1);j++) {
					var val = parseInt(document.getElementById(i+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
					if(val == nVal) {
						perdiste = false;
						break;
					}
				}
			}
		}
		if(perdiste) {
			$.Zebra_Dialog('<strong>Game Over...</strong> suerte la proxima !', {
				'type':     'error',
				'title':    '<center>2048 Game</center>'
			});
		}
	}
	function Colores(val)
	{
		var color = "#ffffff";
		switch(val) {
			case 2:		color = "#C5C5E9 "; break;
			case 4:		color = "#F30C71 "; break;
			case 8:		color = "#F3E90C "; break;
			case 16:	color = "#0CF30F "; break;
			case 32:	color = "#0CD0F3 "; break;
			case 64:	color = "#F30CB1 "; break;
			case 128:	color = "#FA9633 "; break;
			case 256:	color = "#1AF1E8 "; break;
			case 512:	color = "#3114C0 "; break;
			case 1024:	color = "#F94114"; break;
			case 2048:	color = "#6A1197 "; break;
			default:	color = "#ffffff";
		}
		return color;
	}
	function empiezaCon(palabra, letra) {
        var sonIguales = (palabra.substring(0, palabra.length ) === letra);
        return sonIguales;
	}
	function terminaCon(palabra, letra) {
        var sonIguales = (palabra.substring( palabra.length - palabra.length, palabra.length ) === letra); 
       return sonIguales;
    }
	document.onkeydown = function(letraPulsada) {
		letraPulsada.preventDefault();
		switch (letraPulsada.keyCode) {
			case 37:
				left();
				break;
			case 38:
				up();
				break;
			case 39:
				right();
				break;
			case 40:
				down();
				break;
		}
	};


	if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
		console.log("esmovil");
		var myElement = document.getElementById('myElement');
		var mc = new Hammer(myElement);
		mc.get('swipe').set({ 
		direction: Hammer.DIRECTION_ALL,
		treshold: 1,
		velocity: 0.1
		});
		mc.on("swipeleft press", function(ev) {
			left()
		});
		mc.on("swiperight press", function(ev) {
			right()
		});
		mc.on("swipeup press", function(ev) {
			up()
		});
		mc.on("swipedown press", function(ev) {
			down()
		});
		var div = "Deslice aqui para jugar";
		document.getElementById('myElement').innerHTML = div;
	}	
	else {
		console.log("espc");
	}
	load()
	//