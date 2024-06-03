import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage{

  constructor(private route: Router) { }

  goMenu(){
    this.route.navigate(['hoteles/menu']);
  }

  
}
