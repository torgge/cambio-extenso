import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { GuaraniComponent } from './pages/guarani/guarani.component';
import { RealComponent } from './pages/real/real.component';

const routes: Routes = [{
        path: 'home',
        component: HomeComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'display-data',
        component: DisplayDataComponent
    }, {
        path: 'pages/guarani',
        component: GuaraniComponent
    }, {
        path: 'pages/real',
        component: RealComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, GuaraniComponent, RealComponent]
})
export class AppRoutingModule { }
