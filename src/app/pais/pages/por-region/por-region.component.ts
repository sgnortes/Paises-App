import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary mr-1'
      : 'btn btn-outline-primary mr-1';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    // TODO: hacer el llamado al servicio
    this.paisService.buscarPaisPorRegion(region).subscribe((paises: Pais[]) => {
      this.paises = paises;
    });
  }
}
