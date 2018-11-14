import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelaCadastroPage } from '../tela-cadastro/tela-cadastro';
import { TelaCadastroPageModule } from '../tela-cadastro/tela-cadastro.module';
import { PrincipalPage } from '../principal/principal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {
    
  }


  cadastrar(){
    this.navCtrl.setRoot(TelaCadastroPage);    
  }

  logar(){
    this.navCtrl.setRoot(PrincipalPage);
  }


}
