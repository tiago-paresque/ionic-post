import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the ExcluirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-excluir',
  templateUrl: 'excluir.html',
})
export class ExcluirPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExcluirPage');
  }
  apagar(){
    this.navCtrl.setRoot(PrincipalPage);
    
    }

}
