/**
 EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos: 
•	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•	Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 
•	Define un objeto de la clase Cuenta y llama sus métodos.

 */
export class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;
  
    // Constructor que recibe nombre, cantidad, tipo de cuenta y número de cuenta
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.tipoCuenta = tipoCuenta;
      this.numeroCuenta = numeroCuenta;
    }
  
    // Método para depositar dinero
    depositar(monto: number): void {
      if (monto < 5) {
        console.log('El valor a depositar debe ser mayor a $5.00');
      } else {
        this.cantidad += monto;
        console.log(`Se ha depositado correctamente $${monto}.00`);
      }
    }
  
    // Método para retirar dinero
    retirar(valor: number): void {
      if (this.cantidad <= 0) {
        console.log('No hay dinero en la cuenta.');
      } else if (valor < 5) {
        console.log('El valor a retirar debe ser mayor a $5.00');
      } else if (valor > this.cantidad) {
        console.log('No hay suficiente dinero en la cuenta.');
      } else {
        this.cantidad -= valor;
        console.log(`Se ha retirado $${valor}.00. Queda en cuenta: $${this.cantidad}.00`);
      }
    }
  
    // Método para mostrar los datos de la cuenta
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
      console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    }
  }
  