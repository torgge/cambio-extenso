import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule } from './layouts';
import { FooterModule } from './shared/components/footer/footer.component';
import { CambioService } from './shared/cambio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    FooterModule
  ],
  providers: [CambioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
