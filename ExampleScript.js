console.log("_________Manejo de Strings_____________")
let cadena = "Camilo Bonilla";
console.log(cadena);
console.log(cadena.length);
console.log(cadena.split(" "));
console.log(`la cadena tiene ${cadena.split(" ").length} palabras`);
console.log("_________Integer y comparaciones_____________")
let numero = 2;
console.log(typeof(numero));
console.log(numero+100+"hola");
console.log("hola"+100+numero);
console.log("_________Manejo de ==, ===_____________")
console.log("1"==1);
console.log("1"===1);
console.log("_________Listas_____________")
console.log([1,2,3].concat([4,5]));
let lista = [1,2,3,"Camilo Bonilla"];
console.log(lista);
console.log("_________For normal_____________")
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
console.log("__________For de posiciones____________")
for(let item  in lista){
    console.log(item);
}
console.log("_________Creacion de objeto_____________")
let estudiante = {
    nombre : "Camilo", apellido : "Bonilla", codigo : "201312062"
}
console.log("_________Mostrando objeto con for_____________")
for(let item  in estudiante){
    console.log(estudiante[item]);
}
console.log("_________Mostrando objeto atributo por atributo_____________")
console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.codigo);
console.log("___________Funciones________________")
function calcular(){
    console.log("Hola");
}
calcular();
let a = function (){
    return "Hola mundo";
}
console.log(a());
console.log("___________CallBack__Funcion normal______________")
function calc(num1, num2, function1, function2){
    let b = num1 * num2;
    function1(b);
    function2(b,5);
}
function calc2(num1, num2, function1, function2){
    let b = num1 * num2;
    function1(b);
    function2(b,5);
}

function function1(num1){
    let a = num1*2;
    console.log(a);
}
function function2(num1, num2){
    let a = num1+num2;
    console.log(a);
}

calc(2,3,function1,function2);

console.log("___________CallBack__Funcion Anonima______________")
calc2(2,3,(num1)=>{
    let a = num1*2;
    console.log(a);
},(num1,num2)=>{
    let a = num1+num2;
    console.log(a);
});
console.log("___________Interacciones con el DOM_________________");
function cambiarColorTagName(){
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);
    parrafos[0].style.color="red";
}
function cambiarColorQuerySelector(){
    let parrafo = document.querySelector(".Parrafo");
    parrafo.style.color="blue";
}

function addP(){
    let contendor = document.querySelector(".Contenedor");
    let parrafo =  document.createElement("p");
    let texto = document.createTextNode("Hola Mundo");
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}












