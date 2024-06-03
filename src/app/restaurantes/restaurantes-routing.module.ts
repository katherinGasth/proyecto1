import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesPage } from './restaurantes.page';
import { MenuComponent } from '../componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantesPage
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesPageRoutingModule {}
