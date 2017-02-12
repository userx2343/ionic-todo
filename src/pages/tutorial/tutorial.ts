import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(public navCtrl: NavController){

  }

  goToHome(): void {
    this.navCtrl.setRoot(HomePage);
  }
}

