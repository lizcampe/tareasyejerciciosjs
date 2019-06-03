//Recorre un arreglo usando un callback, imprime cada elemento
/*
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(v){
console.log(v);
} );


Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3


setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 4000);




//Escribe un callback que recibe un argumento y lo imprime
let argumento = prompt ("Dime qué imprimo");

function ejemplo1(fn) {
  fn();
}
ejemplo1(function() {
  console.log(argumento);
});  


Crea una función que recibe el callback anterior y lo ejecuta

*/
let nombres = ['yolanda', 'sam', 'goku'];
let argumento = prompt ("Dime qué imprimo");

let hola= function (nombre) {
	console.log('hola' + nombre)
}
 
 nombres.forEach(hola);


 	
nombres.forEach(function (nombreActual){
	hola(nombreActual)


function ejemplo1(fn) {
  fn();
}
ejemplo1(function() {
  console.log(nombreActual + argumento);
});})  

 



/*
Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo



Convierte todos los ejercicios de la parte 1 a usar Promises





let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(v){
	return new Promise((resolve, reject) => resolve(() => console.log(v))	
});






p1 = new Promise((resolve, reject) => setTimeout(() => console.log(1), 3000));
p2 = new Promise((resolve, reject) => setTimeout(() => console.log(2), 1000));
p3 = new Promise((resolve, reject) => setTimeout(() => console.log(3), 4000));
r = Promise.reject('ahh!'); // Crea una Promesa rechazada
tr = new Promise((resolve, reject) => setTimeout(reject, 1500, 'delay'));



let argumento = prompt ("Dime qué imprimo");
function ejemplo1(p) {
  return Promise.resolve().then(() => console.log(p));
}
ejemplo1(argumento);





Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)



Agrega un catch al ejercicio anterior
Agrega un finally al ejercicio anterior
Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
Explica la salida de las siguientes promesas:

Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e));
Promise.reject(2).then(v => v + 3).catch(e => e * 3).then(v => v - 1).then(v => console.log(v));
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(e => console.log(e));
Promise.race([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
Promise.race([Promise.reject(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(arr => console.log(arr));

*/