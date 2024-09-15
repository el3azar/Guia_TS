/* 
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
•	Crear un método constructor para recibir los datos.
•	Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
•	Crea un método para mostrar todos los datos personales (será el método abstracto).
•	Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
•	En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
•	La clase Empleado va heredar de la clase Persona.
•	Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.

*/
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
