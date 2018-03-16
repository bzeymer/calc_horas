import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerService } from './drawer/drawer.service';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PontoComponent } from './ponto/ponto.component';
import { RequestService } from './services/request.service';
import { PontoService } from './services/ponto.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    HeaderComponent,
    ErrorPageComponent,
    HomeComponent,
    OverlayComponent,
    PontoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [
    DrawerService,
    RequestService,
    PontoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
