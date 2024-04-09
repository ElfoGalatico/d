import { SobreComponent } from './sobre/sobre.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'restaurantes/:id', component: DetalhesRestauranteComponent}
]
