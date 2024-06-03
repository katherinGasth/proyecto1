import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'paq-turisticos',
    loadChildren: () => import('./paq-turisticos/paq-turisticos.module').then( m => m.PaqTuristicosPageModule)
  },
  {
    path: 'hoteles',
    loadChildren: () => import('./hoteles/hoteles.module').then( m => m.HotelesPageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then( m => m.ToursPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
