//ejercicio 1//
console.log("Hola mundo!!")
//ejercicio 2//
let nombre = "Diego"
console. log ( "bienvenido(a), Sr(a) " + nombre)

/*declarar una variable llamada costoProducto con su respectivo valor y agregar 10% por concepto de impuestos y $2000 por domicilio 
utilizando variables que permitan la mantebilidad y escalabilidad. Al final del ejercicio mostrar el Valor inicial, Subtotal (valor incial+impuesto)
y valor total*/

let costoProducto = 20000;
let valorDomicilio =2000;
let conceptoImpuesto = 0.10;


let precioInicial = costoProducto ;
console.log ("El precio incial del producto es: "+precioInicial);

let subPrecio = precioInicial+(precioInicial*conceptoImpuesto);
console.log ("El subprecio del producto es: "+subPrecio)

let precioTotal =  subPrecio+valorDomicilio
console.log ("El precio total del producto incluido el impuesto y el valor del domicilio es: "+precioTotal);


/*Declarar una variable llamada costoInicial. Si el producto es menor  a $30000 no tendra nngun tipo de desuento
si el producto es igual o superior a $30000e inferior a $100000 tendra un descuento del 5%
si el producto es igual o superior a $100000 el descuento sera del 10%
imprimir el valor incial y el valor final (incluido el descuento).  */

let costoInicial= 60000;
let primerDescuento = 0.05;
let segundoDescuento = 0.10;

if (costoInicial <30000){ 
    console.log ("El producto no aplica para ningun descuento")
};

if (costoInicial >=30000 && costoInicial <100000){
    var valorDesc1 = costoInicial - (costoInicial*primerDescuento)
    console.log ("El precio del poducto con un descuendo del 5% es: "+valorDesc1)
};

 if (costoInicial >=100000){
     var valorDesc2 = costoInicial - (costoInicial*segundoDescuento)
     console.log("El precio del producto con un descuento del 10% es: " + valorDesc2)
 };

 /*crear un arreglo que almacene los nombres de 4 aprendizes 
  y mostrar el listado a travez de un ciclo
  */
 let aprendizUno = new Array ();
aprendizUno[0] = 1;
aprendizUno[1] = 2326610;
aprendizUno[2] = "Kevin";
aprendizUno[3] = "Stiven";
aprendizUno[4] = "Ijaji ";

 let aprendizDos= new Array(2, "2326610", "Juan ", "Felipe", "Moreno");

 let aprendizTres= new Array(4, "2326610", "Jhoan ", "Sebastian", "Lopez");


 let aprendizCuatro= [4, "2326610", "Diego", "Antonio", "Salazar",];

 console.log ("nombre del primer aprendiz:" + aprendizUno[2]);
 console.log ("nombre del segundo aprendiz:" + aprendizDos[2]);
 console.log ("nombre del tercer aprendiz:" + aprendizTres[2]);
 console.log ("nombre del cuarto aprendiz:" + aprendizCuatro[2])






