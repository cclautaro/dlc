import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeService } from './services/home.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { IndexService } from './services/index.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CargaComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HomeService, IndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
