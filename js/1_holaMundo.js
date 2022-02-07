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





