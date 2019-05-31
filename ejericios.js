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

var num =Number(prompt('ingresa num grande'));
var w = Number(prompt('ingresa num a buscar'));
console.log (num.split(w).length-1);

// Divide un número de 3 dígitos en sus centenas, decenas y unidades


  // 103 -> 1 centena, 0 decenas, 3 unidades


// Regresa todos los caracteres que no sean letras de una cadena


// Haz una función que lanza un error con el mensaje dado por el usuario


// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack



try{} 
catch (error){}


// Suma los contenidos de un arreglo de números


// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original

// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/


// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original


// Quita los valores repetidos de un arreglo (sin usar otro arreglo)


// Convierte un número binario dado por el usuario a decimal

                                                                                   
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)


// Regresa la cantidad de valores que comparten dos arreglos diferentes


// Valida que una cadena dada no tenga espacios en blanco

var a =String 

// Dada una cadena, determina su valor de scrabble
/*
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

