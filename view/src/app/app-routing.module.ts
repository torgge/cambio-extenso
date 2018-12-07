import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExtensoComponent} from './extenso/extenso.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'extenso', component: ExtensoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
