import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TelaCadastroPage } from '../pages/tela-cadastro/tela-cadastro';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { ExcluirPage } from '../pages/excluir/excluir';
import { EditarPage } from '../pages/editar/editar';
import { PrincipalPage } from '../pages/principal/principal';
import { RestProvider } from '../providers/rest/rest';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListPage } from '../pages/list/list';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TelaCadastroPage,
    PesquisarPage,
    ExcluirPage,
    EditarPage,
    PrincipalPage,
    ListPage
  
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TelaCadastroPage,
    PesquisarPage,
    ExcluirPage,
    EditarPage,
    PrincipalPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},   
    RestProvider
  ]
})
export class AppModule {
 
}

