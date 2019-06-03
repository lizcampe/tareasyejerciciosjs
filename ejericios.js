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


function multiple (valor, multiple) {
  var valor = parseInt (prompt("Ingresa el número que quieres revisar"));
  var multiple = parseInt (prompt("Introduce el mùltiplo que quieres explorar"));
  resto= valor % multiple;
    if(resto %3 ===0) {
      alert ("el número " + valor + "es múltiplo de " + multiple);
    } else if (resto %7 ===0){
      alert ("el nùmero "+ valor + " es mùltiplo de " + multiple);
      } else {
        alert ("el nùmero que introdujiste no es mùltiplo de 3 o 7");
      }
    }





 
// Revisa cuantas veces se repite un caracter dado en una cadena dada
 var frase1= prompt ('inserta una frase');
 var contando=0;
 var x= prompt('Letra que quieres saber cuánto se repite');
var  indice = frase1.indexOf(x);
while (indice !=-1){
  contando++;
  indice= frase1.indexOf(x, indice+1);
}
document.writeln(`la letra "${x}" se repite ${contando} veces`);

//var cadena =String(prompt('ingresa cadena de oración'));

//var a= String(prompt('ingresa letra a buscar'));
//cadena.split("a").length-1


// Revisa cuantas veces se repite un valor dado en un arreglo







var num =(prompt('ingresa num grande'));
var w = (prompt('ingresa num a buscar'));
console.log (num.split(w).length-1);


// Divide un número de 3 dígitos en sus centenas, decenas y unidades



function numCentenas(numero) {
  var num= numero.toString().split('');
  var result= num[0]+ ' centenas' +', '+ num[1] + 'decenas' + ', '+ num [2] + ' unidades';
  console.log(result);   
}

numCentenas (599)


// Regresa todos los caracteres que no sean letras de una cadena


let palabraNoletra = (prompt("ingresa caracteres"));
var arregloNoletra = [];
var arr = palabraNoletra.split('');

for ( i= 0; i < arr.lenght; i++) {
  if (/[a-zA-z]+/.test(arr[i])) {
    arregloNoletra= arregloNoletra
  } else {
    arregloNoletra += arr[i]
  }
}
document.getElementByID('car').innerHTML = arregloNoletra;






// Haz una función que lanza un error con el mensaje dado por el usuario

let mensaje = window.prompt("ingrese su mensaje de error: ");
function errorImp(){
  throw new Error(mensaje);
};




// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

function errorImp(){
try{ 
error()
}catch (error){ 
  document.getElementById('err').innerHTML = Error;
  document.getElementById('errStack').innerHTML =Error.stack;
  }
}


// Suma los contenidos de un arreglo de números

var losNumeros = Array();
var suma = 0;
function sumandoNumeros() {
  for (n=0; n<5; n++){
  losNumeros[5]=Number(prompt('escribe un número'));
}
 for (i= 0; i < losNumeros.length; i++) {
  suma+= losNumeros[i];
 }
 return suma
}
 alert ('la suma es ' + sumandoNumeros());



// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original

function cuadrado() {
  let arr =window.prompt ('Ingresa el arreglo a modificar: ');
  var cuad = [];
  for (let i=0; i<arr.length; i++) {
  if (/\d/.test(arr[i])) {
  cuad.push(Math.pow(parseFloat(arr[i]), 2));
  }
  }
  document.getElementById('resultado').innerHTML =cuad;
}

 

// Regresa que tipo de ángulo es el dado

  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados


var angulos = Number(prompt ("ingresa el número de grados del ángulo"));

if (angulos>=0 && angulos <= 89){
  alert ('Angulo agudo')
} else if (angulos ==90){
  alert ('Angulo recto') 
} else if (angulos <= 179 && angulos > 90) {
  alert ('Aangulo obtuso')
} else if (angulos ==180) {
  alert ('Angulo llano')
}
  else {
  alert ('Ingrese un àngulo entre 0 y 180')
  };





// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original

function sinRepetidos() {
  var elementos = null;
  var arreglo = [];
   while (elementos >= 0) {
    if (elementos != null) {
      arreglo.push(elementos);
      } 
      elementos = prompt ('Dame un número: ');
      }
    elSet = new Set(arreglo);
    var resultadosSinRepetir = JSON.stringify(Array.from(elSet));
    document.getElementById("resultadosSinRepetir").innerHTML = resultadosSinRepetir;

}


// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
//(el del set)

function sinRepetido2(arreglo):
for (var i in arreglo) (
  for (var j in arreglo) {
  if (arreglo [i]==arreglo[j]&& 1 !=j) [
   j++;
   arreglo.splice(i.1);
  ]
  }
}
return arreglo;
}

// Convierte un número binario dado por el usuario a decimal

var num =Number(prompt('escribe un número'));


alert( num.toString(2) );  

// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)

var num =Number(prompt('escribe un número'));


alert( num.toString(2) );  
alert( num.toString(8) );
alert( num.toString(16) );



// Regresa la cantidad de valores que comparten dos arreglos diferentes


var array =[5,5,4,7,8];
var thisArg= [5,3,5,5,2,5,3];


 var resultado = thisArg.filter( (galletita ) =>  {
  return array.includes(galletita);
  
  
});

console.log(resultado);
 





// Valida que una cadena dada no tenga espacios en blanco

var cara = String(prompt(Escriba su cadena));

function espBlan {
  if
}
var a =String 




// Dada una cadena, determina su valor de scrabble

  */
//npm install -g jasmine
//jasmine scrabble-score.spec.js



  const valorporletra = {
  1: [E, A, I, O, N, R, T, L, S, U],
  2: [D, G],
  3: [B, C, M, P],
  4: [F, H, V, W, Y],
  5: [K],
  8: [J, X],
  10: [Q, Z]
  };
/*VAR: count scores*/
var sum;

/*FUNCTION: return score of letter*/
function lettersToScore(letter) 
{
    for (var index in letters)
    {
  if (Object.keys(letters).indexOf((letters[index].indexOf(letter) !== -1) ? index.toString() : '-1')
      !== -1) {
      return parseInt(index);
  } 
    }
}

/*FUNCTION: count final score*/
var score = function(input) {
    sum = 0;
    if (input === null || input === "") {
  return 0;
    }
    
    input.toUpperCase().split("").forEach(function(elem, index, array) {
  sum += lettersToScore(elem);
    });
    return sum;
}

/*EXPORTS: export of function score*/
module.exports = score;


const calcScore = (text) => {
    let score = 0;
    text = text.toLowerCase();
    for (let ch of text) {
        score += valorporletra[ch];
    }
    return score;
}


// Determina si una cadena dada por el usuario es un acrónimo


// Implementa una lista ligada


// Implementa una lista doblemente ligada

// Obten el Máximo común divisor de dos números dados
