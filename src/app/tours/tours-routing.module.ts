import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToursPage } from './tours.page';
import { MenuComponent } from '../componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: ToursPage
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
export class ToursPageRoutingModule {}
