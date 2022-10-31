import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  // Propiedades
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  // Constructor
  constructor(private paisService: PaisService) {}

  // Métodos
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPaisPorCapital(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
