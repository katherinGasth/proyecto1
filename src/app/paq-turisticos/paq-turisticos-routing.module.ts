import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaqTuristicosPage } from './paq-turisticos.page';
import { MenuComponent } from '../componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: PaqTuristicosPage
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
export class PaqTuristicosPageRoutingModule {}
