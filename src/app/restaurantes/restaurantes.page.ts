import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage  {

  constructor(private route: Router) { }

  

  goMenu(){
    this.route.navigate(['hoteles/menu']);
  }

}
