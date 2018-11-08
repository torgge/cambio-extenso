import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guarani',
  templateUrl: './guarani.component.html',
  styleUrls: ['./guarani.component.css']
})
export class GuaraniComponent {

  extensoEntity: any;
  colCountByScreen: Object;

  constructor() {
      this.extensoEntity = {
          Moeda: 'Guaraní',
          Valor: 10.001,
          Extenso: 'Diez mil guaraníes y un...'
      };
  }

}
