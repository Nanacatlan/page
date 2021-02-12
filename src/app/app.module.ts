import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralComponent } from './components/danzas/general/general.component';
import { NegritosComponent } from './components/danzas/negritos/negritos.component';
import { SanMiguelComponent } from './components/danzas/san-miguel/san-miguel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    GeneralComponent,
    NegritosComponent,
    SanMiguelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
