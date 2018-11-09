import { Component, OnInit } from '@angular/core';
import { CambioService } from 'src/app/shared/cambio.service';

@Component({
  selector: 'app-guarani',
  templateUrl: './guarani.component.html',
  styleUrls: ['./guarani.component.css']
})
export class GuaraniComponent {

  extensoEntity: any;
  colCountByScreen: Object;

  constructor(private service: CambioService) {
      this.extensoEntity = {
          Moeda: 'Guaraní',
          Valor: 10.001,
          Extenso: ''
      };

      this.extensoEntity.Extenso = this.service.getExtensoGuarani(this.extensoEntity.Valor);
  }

}
