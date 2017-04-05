import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPagePage } from '../second-page/second-page';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
 changePage(event) {
    this.navCtrl.push(SecondPagePage, {
      param1: 'Basil', param2: 'Alias'
    });
  }  
}
