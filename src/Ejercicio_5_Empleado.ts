// Empleado.ts
import { Persona } from './Ejercicio_5_Persona';

export class Empleado extends Persona {
  private sueldo: number;

  // Constructor que llama al constructor de Persona
  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  // Método para cargar el sueldo
  cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  // Método para imprimir el sueldo
  imprimirSueldo(): void {
    console.log(`El sueldo de ${this.nombre} ${this.apellido} es $${this.sueldo}.00`);
  }

  // Implementación del método abstracto para mostrar los datos personales
  mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
    this.imprimirSueldo();
  }
}
