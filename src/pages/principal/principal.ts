import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarPage } from '../editar/editar';
import { PesquisarPage } from '../pesquisar/pesquisar';
import { ExcluirPage } from '../excluir/excluir';
import { HomePage } from '../home/home';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  editar(){
    this.navCtrl.setRoot(EditarPage);
  }
  pesquisar(){
    this.navCtrl.setRoot(PesquisarPage);
  }
  excluir(){
    this.navCtrl.setRoot(ExcluirPage);
  }
  deslogar(){
    this.navCtrl.setRoot(HomePage);
  }
}
