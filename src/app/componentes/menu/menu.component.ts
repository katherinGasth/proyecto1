import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {

  constructor(private route: Router) { }

  goHoteles(){
    this.route.navigate(['hoteles']);
  }

  goRestaurantes(){
    this.route.navigate(['restaurantes']);
  }
  goTours(){
    this.route.navigate(['tours']);
  }
  goHome(){
    this.route.navigate(['paq-turisticos']);
  }
  goOut(){
    this.route.navigate(['login']);
  }

}
