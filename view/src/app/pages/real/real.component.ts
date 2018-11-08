import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})
export class RealComponent {
  extensoEntity: any;
  colCountByScreen: Object;

  constructor() {
      this.extensoEntity = {
          Moeda: 'Real',
          Valor: 10.001,
          Extenso: 'Dez mil reais e um '
      };
  }

}
