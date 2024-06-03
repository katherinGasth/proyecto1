import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss'],
})
export class ToursPage  {

  constructor(private route: Router) { }

  goMenu(){
    this.route.navigate(['hoteles/menu']);
  }

}
