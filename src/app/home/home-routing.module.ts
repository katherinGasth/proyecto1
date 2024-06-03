import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PaqTuristicosPage } from '../paq-turisticos/paq-turisticos.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
