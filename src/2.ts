class Device {
    constructor(public nombre: string, public ram: string, public procesador: string) {}
    detalles(): string {
        return `Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Notebook extends Device {}
class Desktop extends Device {}
class Servidor extends Device {}

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Device {
        switch (tipo) {
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo no reconocido");
        }
    }
}

// Ejemplo de uso
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
