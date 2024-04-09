import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

import {ROUTES} from './app.routes'
import { RouterModule } from '@angular/router';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';
import { MenuComponent } from './detalhes-restaurante/menu/menu.component';
import { CarrinhoComponent } from './detalhes-restaurante/carrinho/carrinho.component';
import { ItemMenuComponent } from './detalhes-restaurante/item-menu/item-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    RestaurantesComponent,
    RestauranteComponent,
    DetalhesRestauranteComponent,
    MenuComponent,
    CarrinhoComponent,
    ItemMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    RestaurantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
