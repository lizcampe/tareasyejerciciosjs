// Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro) y calcule su edad e

/*
  
let age = Number(prompt("Ingresa la edad 'humana' del perro"));

function calculateDogAge(age){
geDog = (age * 7);
return geDog;
}

console.log ("La edad en años perro son " + calculateDogAge(age) + "años"); 



// Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) y calcule cuantos dulces consumirías por el resto de tu vida.
  // El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)

const edad = 75
const dulcesDia = 3

function getCandySupply(edad) { 
  duldia = (edad* dulcesDia);
  return duldia; 
}
console.log ("Los dulces que se consumirían a lo largo de la vida serían alrededor de "+ getCandySupply(edad) + " dulces");



 Crea una función que permita encadenar llamadas
  // a().a().a() ... etc


// Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse


let tipo = prompt("¿Cómo quieres tu saludo? ¿formal o casual?");

function saludo(tipo) {

if ("formal") {
  saluda = "buenos días";
} else {
  saluda = "hola";
} return saluda;
};

console.log ( saludo(tipo) + " en qué puedo ayudarte?");



function saludo(tipo, formal,casual) {
  if (tipo ==='formal') {
    console.log(formal())
  } else {
    console.log(casual())
  }
};

let f = () => 'buenos dias';
let c = () => 'hola';

saludo(prompt("¿Cómo quieres tu saludo? ¿formal o casual?"), f, c);


*/



/// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map


//

/*
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



var str = prompt ("Ingresa un enunciado en minusculas");

let pieces = str.split(" ").map((palabra)=> {
  let cambio = palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();

  return cambio;
});


console.log (String(pieces));




 "Explica cual es la salida de las siguientes funciones y porqué:"



var a = 12;
(function() {
  alert(a);
})();

var a = 5;
(function() {
  var a = 12;
  alert(a);
})();



var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();



var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();


var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);
  });
})();
x();

var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();

function leFunction() {
  console.log(a); "devuelve undefined"
  console.log(foo()); "devuelve 2"

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();

var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname()); "devuelve Le Name"
var aCall = obj.prop.getFullname;
console.log(aCall()); "devuelve A Name"
console.log(obj.fullname);
"devuelve Full Name"

var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

"devuelve 1"





  Crea una clase persona que recibe un nombre, apellido y edad
 */


    function persona (nombre, apellido, edad) {
           this.nombre = nombre;
           this.apellido= apellido;
           this.edad= edad;
   };


   console.log(persona());


/*
   let nombre = prompt ("Ingresa un nombre");
   let apellido= prompt ("Ingresa un apellido");
  let edad= Number(prompt ("Ingresa edad"));

/*
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.

  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart

