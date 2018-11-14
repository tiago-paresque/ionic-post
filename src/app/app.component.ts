import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Menu } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { NullAstVisitor } from '@angular/compiler';
import { EditarPage } from '../pages/editar/editar';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { ExcluirPage } from '../pages/excluir/excluir';
import { ListPage } from '../pages/list/list';
@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {  
  @ViewChild (Nav) Nav: Nav; 
  rootPage:any = HomePage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  editar(){
    this.Nav.setRoot(EditarPage);    
}
pesquisar(){
  this.Nav.setRoot(PesquisarPage);    
}
excluir(){
   this.Nav.setRoot(ExcluirPage);    
}
list(){
  this.Nav.setRoot(ListPage);    
}
deslogar(){
  this.Nav.setRoot(HomePage);    
}

}