import { Component } from '@angular/core';
import { Adherent } from './adherent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Vie d'Eau Paris Backgammon";
  adherent: Adherent;

  constructor(){
    this.adherent=new Adherent;
  }

  handleCreate(adherent: Adherent){
    this.adherent=adherent;
    
    console.log("ça devrait s'écrire sur la carte");
  }





}
