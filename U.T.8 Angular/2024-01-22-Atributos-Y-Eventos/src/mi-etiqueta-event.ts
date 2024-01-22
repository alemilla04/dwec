import { MiEtiquetaEventInterface } from "./mi-etiqueta-event-interface";
import { MiEtiquetaComponent } from "./mi-etiqueta/mi-etiqueta.component";

export class MiEtiquetaEvent implements MiEtiquetaEventInterface {
    private timestamp: number;

    constructor(private target: MiEtiquetaComponent, private messaje: string) {
        this.timestamp = new Date().getTime();
    }

    getMessage(): string {
        return this.messaje;
    }

    getTimestamp(): number {
        return this.timestamp;
    }

    getTarget(): MiEtiquetaComponent {
        return this.target;
    }
}
