import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { TableDirective } from './directives/table.directive';

@NgModule({
  declarations: [
    AppComponent,
    PanelPrincipalComponent,
    TableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
