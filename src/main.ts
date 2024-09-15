import { CabeceraPagina } from './Ejercicio_1';
import { Calculadora } from './Ejercicio_2';
import { Cancion } from './Ejercicio_3';
import { Cuenta } from './Ejercicio_4';
import { Empleado } from './Ejercicio_5_Empleado';

const cabecera = new CabeceraPagina('Bienvenidos', 'rojo', 'Arial');
cabecera.definirAlineacion('centrado');
cabecera.imprimirPropiedades();


//Ejercicio 2
const calc = new Calculadora();

// Probar los métodos de la calculadora
console.log('Suma (2 + 3):', calc.sumar(2, 3));           // Resultado: 5
console.log('Resta (5 - 2):', calc.restar(5, 2));         // Resultado: 3
console.log('Multiplicación (4 * 5):', calc.multiplicar(4, 5)); // Resultado: 20
console.log('División (10 / 2):', calc.dividir(10, 2));    // Resultado: 5
console.log('Potencia (2 ^ 3):', calc.potencia(2, 3));     // Resultado: 8
console.log('Factorial (5!):', calc.factorial(5));         // Resultado: 120

//Ejercicio 3
// Crear una instancia de la clase Cancion
const cancion = new Cancion('Despacito', 'Reguetón');

// Establecer el autor usando el método set
cancion.setAutor('Luis Fonsi');

// Mostrar los datos de la canción
cancion.mostrarDatos();

//Ejercicio 4
// Crear una instancia de la clase Cuenta
const cuenta = new Cuenta('Juan Pérez', 100, 'Ahorro', '123456789');

// Mostrar los datos de la cuenta
cuenta.mostrarDatos();

// Intentar depositar dinero
cuenta.depositar(10);  // Debe imprimir que el depósito fue exitoso
cuenta.depositar(3);   // Debe imprimir que el valor a depositar debe ser mayor a $5.00

// Intentar retirar dinero
cuenta.retirar(20);    // Debe imprimir cuánto se retiró y cuánto queda en la cuenta
cuenta.retirar(2);     // Debe imprimir que el valor a retirar debe ser mayor a $5.00
cuenta.retirar(100);   // Debe imprimir que no hay suficiente dinero en la cuenta


//Ejercicio 5
// Crear una instancia de la clase Empleado
const empleado = new Empleado('Juan', 'Pérez', 'Calle Falsa 123', '555-1234', 30, 2500);

// Mostrar los datos del empleado
empleado.mostrarDatos();

// Verificar si es mayor de edad
empleado.esMayorDeEdad();