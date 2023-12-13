// - Se selecciona aleatoriamente una letra del abecedario.
// - Se indica al usuario la letra con la que jugamos y le decimos que tiene X segundos para escribir una palabra que empiece por ella. 
// - Cuando el usuario haga clic en el botón empezar, se lanza un temporizador de X segundos.
// - Mientras que el usuario vaya introduciendo palabras que comienzan con la letra indicada inicialmente, y lo haga antes de X segundos el juego continúa.
// - Si vencen los X segundos y el usuario no ha introducido una palabra el juego termina indicando la puntuación obtenida (número de palabras introducidas) y la lista de palabras introducidas.
// Para la entrega, sube los archivos a github y pon enlace en el texto en línea.
// Los criterios de evaluación implicados en este control son: RA2 (CE2e, CE2f, CE2g y CE2h), RA3 (CE3c y CE3d) y RA4 (CE4i).
let arrLetras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let letra = document.getElementById("letra");
let pos='';
let longitudArrLetras =arrLetras.length;
for (let i = 0; i < arrLetras.length; i++) {
        pos=Math.floor(Math.random()*longitudArrLetras);
}
console.log(pos);
//letra.addEventListener();
