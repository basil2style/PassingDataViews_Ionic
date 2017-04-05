import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SecondPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-second-page',
  templateUrl: 'second-page.html'
})
export class SecondPagePage {
    parameter1: string;
    parameter2: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parameter1 = navParams.get('param1'); 
    this.parameter2 = navParams.get('param2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPagePage');
  }

}
