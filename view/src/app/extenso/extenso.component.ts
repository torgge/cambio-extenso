import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CambioService} from '../shared/cambio.service';
import {Observable} from 'rxjs';
import {Cambio} from '../shared/model/Cambio';

@Component({
  selector: 'geo-extenso',
  templateUrl: './extenso.component.html',
  styleUrls: ['./extenso.component.css']
})
export class ExtensoComponent implements OnInit {
  private _prefix: string;

  cambioForm = this.fb.group({
    moeda: 1,
    valor: [null, Validators.required],
    extenso: null
  });

  constructor(private fb: FormBuilder, private service: CambioService) {
  }

  ngOnInit(): void {
    this.changePrefix();
  }

  public getPrefix(): string {
    return this._prefix;
  }

  public changePrefix() {
    const moeda = Number(this.cambioForm.controls['moeda'].value);
    switch (moeda) {
      case 0:
        this._prefix = `U$ `;
        break;
      case 1:
        this._prefix = `G$ `;
        break;
      case 2:
        this._prefix = `R$ `;
    }

    console.log(`Prefixo`, this._prefix);
  }

  public onSubmit() {
    this.service
      .getExtenso(
        this.cambioForm.controls['valor'].value,
        this.cambioForm.controls['moeda'].value,
      )
      .subscribe((e: Cambio) => {
        console.log('Cambio', e);
        this.cambioForm.controls['extenso'].setValue(e.extenso);
      });
  }
}
