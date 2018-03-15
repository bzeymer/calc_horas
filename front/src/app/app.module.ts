import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerService } from './drawer/drawer.service';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OverlayComponent } from './overlay/overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    HeaderComponent,
    ErrorPageComponent,
    HomeComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
