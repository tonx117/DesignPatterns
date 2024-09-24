class Inventario {
    private static instancia: Inventario;
    private equipos: { nombre: string; tipo: string; estado: string }[] = [];

    private constructor() {} // Constructor privado para evitar nuevas instancias

    static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string) {
        this.equipos.push({ nombre, tipo, estado });
    }

    listarEquipos() {
        return this.equipos;
    }
}

// Ejemplo de uso
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
