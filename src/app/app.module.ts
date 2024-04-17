import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

import { FormsModule } from '@angular/forms';

import {ROUTES} from './app.routes'
import { RouterModule } from '@angular/router';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';
import { MenuComponent } from './detalhes-restaurante/menu/menu.component';
import { CarrinhoComponent } from './detalhes-restaurante/carrinho/carrinho.component';
import { ItemMenuComponent } from './detalhes-restaurante/item-menu/item-menu.component';
import { ReviewsComponent } from './detalhes-restaurante/reviews/reviews.component';
import { ReviewComponent } from './detalhes-restaurante/reviews/review/review.component';
import { ReviewsService } from './detalhes-restaurante/reviews/reviews.service';
import { PedidoComponent } from './pedido/pedido.component';


registerLocaleData(localePt);
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
    ItemMenuComponent,
    ReviewsComponent,
    ReviewComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    RestaurantesService,
    ReviewsService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
