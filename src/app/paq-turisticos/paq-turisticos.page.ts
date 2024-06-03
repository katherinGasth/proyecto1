import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paq-turisticos',
  templateUrl: './paq-turisticos.page.html',
  styleUrls: ['./paq-turisticos.page.scss'],
})
export class PaqTuristicosPage implements OnInit {

  nombreUsuario: string | null  ='';

  constructor( private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.nombreUsuario = this.route.snapshot.paramMap.get("nombreUsuario");
  }

  goMenu(){
    this.router.navigate(['paq-turisticos/menu']);
  }
  

}
