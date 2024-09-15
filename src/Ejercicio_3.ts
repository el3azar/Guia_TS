// Ejercicio_3.ts
export class Cancion {
    private autor: string;   // Atributo privado
    public titulo: string;  // Atributo público
    public genero: string;  // Atributo público
  
    // Constructor que recibe título y género
    constructor(titulo: string, genero: string) {
      this.titulo = titulo;
      this.genero = genero;
      this.autor = ''; // Inicializa el atributo autor vacío
    }
  
    // Método get para obtener el autor
    getAutor(): string {
      return this.autor;
    }
  
    // Método set para establecer el autor
    setAutor(autor: string): void {
      this.autor = autor;
    }
  
    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Autor: ${this.autor}`);
    }
  }
  