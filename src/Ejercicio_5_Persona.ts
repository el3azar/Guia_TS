// Persona.ts
export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;
  
    // Constructor para recibir los datos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    // Método para verificar si es mayor de edad
    esMayorDeEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
      }
    }
  
    // Método abstracto para mostrar los datos personales
    abstract mostrarDatos(): void;
  }
  