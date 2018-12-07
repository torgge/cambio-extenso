import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CambioService} from '../shared/cambio.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'geo-extenso',
  templateUrl: './extenso.component.html',
  styleUrls: ['./extenso.component.css'],
})
export class ExtensoComponent {

  extenso$: Observable<any>;

  cambioForm = this.fb.group({
    moeda: 1,
    valor: [null, Validators.required],
    extenso: null
  });

  constructor(private fb: FormBuilder,
              private service: CambioService) {
  }

  onSubmit() {

    this.extenso$ = this.service.getExtensoGuaraniV2(this.cambioForm.controls['valor'].value);

    this.extenso$.subscribe(e => {
      console.log('extenso', e.toString());
      this.cambioForm.controls['extenso'].setValue(e);
    });
  }
}
