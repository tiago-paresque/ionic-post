import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',

})


export class ListPage {
  post: any;
  
  constructor(public navCtrl: NavController, public restProvider :RestProvider) {
    this.ListPost();
      }
    
      ListPost(){
        this.restProvider.getPostagem()
        .then(data=>{
          this.post = data;
          console.log(this.post);
        });
        
          }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  

}
