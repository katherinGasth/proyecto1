import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelesPage } from './hoteles.page';
import { MenuComponent } from '../componentes/menu/menu.component';
import { PaqTuristicosPage } from '../paq-turisticos/paq-turisticos.page';

const routes: Routes = [
  {
    path: '',
    component: HotelesPage
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'paq-turisticos',
    component: PaqTuristicosPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelesPageRoutingModule {}
