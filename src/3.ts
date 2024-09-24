interface Observador {
    notificar(equipo: Equipo): void;
}

class Soporte implements Observador {
    notificar(equipo: Equipo) {
        console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.estado}.`);
    }
}

class Equipo {
    private observadores: Observador[] = [];

    constructor(public nombre: string, public tipo: string, public estado: string) {}

    agregarObservador(observador: Observador) {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado: string) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores() {
        this.observadores.forEach((observador) => observador.notificar(this));
    }
}

// Ejemplo de uso
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
