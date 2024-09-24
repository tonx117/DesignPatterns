class InventarioViejo {
    private items: string[] = [];

    agregarItem(item: string) {
        this.items.push(item);
    }

    obtenerItems(): string[] {
        return this.items;
    }
}

class AdaptadorInventario {
    constructor(private inventarioViejo: InventarioViejo) {}

    agregarEquipo(nombre: string, tipo: string, estado: string) {
        const equipo = `${nombre} (${tipo}, ${estado})`;
        this.inventarioViejo.agregarItem(equipo);
    }

    listarEquipos() {
        return this.inventarioViejo.obtenerItems().map(item => {
            const [nombre, resto] = item.split(' (');
            const [tipo, estado] = resto.replace(')', '').split(', ');
            return { nombre, tipo, estado };
        });
    }
}

// Ejemplo de uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
