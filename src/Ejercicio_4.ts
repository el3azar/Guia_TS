// Ejercicio_4.ts
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
  