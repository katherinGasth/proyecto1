import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombreUsuario: string | null  ='';
  formularioDatosUsusario: FormGroup;
  isReset: boolean = false;
  

  constructor(
    private route: ActivatedRoute, 
    private form: FormBuilder,
    private router: Router
  ) {
    this.formularioDatosUsusario = this.form.group({
      nombre: '',
      apellido: '',
      fechaNacimiento: ''
    });
  }

  enviar(){
    this.router.navigate(['paq-turisticos', {nombreUsuario: this.nombreUsuario}]);

  }
  

  ngOnInit(){
    this.nombreUsuario = this.route.snapshot.paramMap.get("nombreUsuario");
  }

  reset(){
    this.isReset = true;
  }
  

  
}
