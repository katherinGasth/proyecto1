import { Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  formularioLogin: FormGroup

  constructor( private form: FormBuilder, private route: Router, private alertController: AlertController) { 
    this.formularioLogin = this.form.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', Validators.required]
    })
    
  }

  

  enviar(){
    
    if (this.formularioLogin.value["usuario"] == 'kathy' && this.formularioLogin.value["password"] == 5678){
      this.route.navigate(['home', {nombreUsuario: this.formularioLogin.value["usuario"]}]);
    }
    else {
      this.presentAlert('Usuraio o contraseña incorrecta, intentelo de nuevo');
    };



  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    });

    await alert.present();

  }

  hasError(controlName: string, errorType: string){
    return this.formularioLogin.get(controlName)?.hasError(errorType) && this.formularioLogin.get(controlName)?.touched
  }

  

}


