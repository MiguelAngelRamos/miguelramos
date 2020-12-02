var indice = 0;
frases = new Array();

frases = ['Angular','React.js','Vue.js','Php Laravel','API REST','Redux', 'Ionic','FireBase','BD MySQL','Java','Spring Boot','Socket.io','Node.js']

indice = Math.random()*(frases.length);
indice = Math.floor(indice);

function rotar() {
if (indice == frases.length) {indice = 0;}
document.getElementById("rotando").innerHTML = frases[indice];
indice++;
setTimeout("rotar();",4000);
}


