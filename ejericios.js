// Imprime la fecha actual
/*console.log (Date())
// Obten el área de un triángulo. Pidele los 3 lados al usuario

/*let base = prompt ("Dime la medida de la base");
  
let altura = prompt ("Dime la medida lado b");

let areaTriangulo = (base)*(altura)/2;

console.log(areaTriangulo);
____

function area () {
  let lado1=Number(window.prompt("¿cuál es el lado 1?"));
  let lado2=Number(window.prompt("¿cuál es el lado 2?"));
  let lado3=Number(window.prompt("¿cuál es el lado 3?"));

  semiperim= (lado1+lado2+lado3)/2;
  area =Math.sqrt(semiperim*((semiperim-lado1),(semiperim-lado2), (semiperim-lado3)));
  alert ("El area del triangulo es "+area);




  area del triángulo es 




// Voltea una string dada por el usuario

var elString = new String(prompt ("Dime un texto")) 
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}
console.log(elString.reverse() );  



// Voltea una string dada por el usuario sin usar el método de reverse

const invertirCadena = elString => {
    let nuevaCadena = "";
    for (let x = elString.length - 1; x >= 0; x--) {
        nuevaCadena += elString[x];
    }
    return nuevaCadena;
}

let elString = new String(prompt ("Dime un texto"));
console.log(invertirCadena(elString));
*/


// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C



function gFa(gCe) {
 return (gCe *(9/5)+32);
}


function gCe (gFa) {
 return(gFa - (32*5/9));
}


var temp = prompt ("Escribe a cual escala quieres convertir: c o f");

if (temp === "c") {
  var gCe = Number(prompt ("Dime la temperatura en grados celsius"));
console.log (gFa(gCe));
}else {var gFa = Number(prompt ("Dime la temperatura en grados fahrenheit"));
console.log(gCe(gFa));
}
;



*/



 ///Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
/*
  si prop es el nombre,
  a  = {};
  a.prop = true



var a = prompt ("Dime un nombre para el nuevo objeto");
let x = {}
x[a] = true

console.log (x);




// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

var numus = Number(prompt ("Ingresa un numero a sumar"));
var n2=0;
             while (numus >= 0) {
              n2 += numus;
              var numus= Number(prompt ("ingresa número"))
                  }
                 console.log(" La suma es: "+' ' + n2);



/*


// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario



 

var str = String (prompt ("Ingresa un enunciado en minusculas"));
function ucFra( str )
{
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
};
console.log(ucFra(str));

 

// Revisa si un número dado es múltiplo de 3 o de 7

function multiplo () {
   let num = window.prompt ()
}








// Revisa cuantas veces se repite un caracter dado en una cadena dada
//var cadena =String(prompt('ingresa cadena de oración'));
//var a= String(prompt('ingresa letra a buscar'));
//cadena.split("a").length-1

*/
// Revisa cuantas veces se repite un valor dado en un arreglo

/*

var num =Number(prompt('ingresa num grande'));
var w = Number(prompt('ingresa num a buscar'));
console.log (num.split(w).length-1);

// Divide un número de 3 dígitos en sus centenas, decenas y unidades

function multiplo() {
  let num= prompt('Ingresa número:')
  num= 
  // 103 -> 1 centena, 0 decenas, 3 unidades
}


// Regresa todos los caracteres que no sean letras de una cadena


// Haz una función que lanza un error con el mensaje dado por el usuario
function 

// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
*/
/*

try{ }

catch (error){ alert;  }



// Suma los contenidos de un arreglo de números
var losNumeros = Arr();
var suma = 0;
function sumandoNumeros() {
  for (n=0; n<5; n++){
  losNumeros[5]=Number(prompt('escribe un número'))
}
 for (i= 0; i < losNumeros.length; i++) {
  suma+= losNumeros[i];
 }
 return suma
}
 alert ('la suma es ' + sumandoNumeros());
// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original

l

// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados






// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original

//arr 


// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
//(el del set)

// Convierte un número binario dado por el usuario a decimal

var num =Number(prompt('escribe un número'));


alert( num.toString(2) );  

// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)

var num =Number(prompt('escribe un número'));


alert( num.toString(2) );  
alert( num.toString(8) );
alert( num.toString(16) );



// Regresa la cantidad de valores que comparten dos arreglos diferentes
*/

var array =[5,5,4,7,8];
var thisArg= [5,3,5,5,2,5,3];


 var resultado = thisArg.filter( (galletita ) =>  {
  return array.includes(galletita);
  
  
});

console.log(resultado);
 

/*


array1 = ["uno", "dos", "tres"];    
array2 = ["tres", "dos", "uno"];

array1.sort();
array2.sort();


array1.length==array2.length && array1.every(function(v,i)
  { return v === array2[i] }

*/

// Valida que una cadena dada no tenga espacios en blanco

var cara = String(prompt(Escriba su cadena));

function espBlan {
  if
}
var a =String 



/*
// Dada una cadena, determina su valor de scrabble

  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/


// Determina si una cadena dada por el usuario es un acrónimo


// Implementa una lista ligada


// Implementa una lista doblemente ligada


// Obten el Máximo común divisor de dos números dados

