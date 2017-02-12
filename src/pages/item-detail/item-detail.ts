import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Data } from '../../providers/data';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  title;
  description;
  item;
  index;

  public items = [];
 
  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public storage: Storage, public dataService: Data){


  this.dataService.getData().then((todos) => {

    if(todos){
      this.items = JSON.parse(todos); 
      console.log(this.items);
    }

  });

 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.index = this.navParams.get('index');
  }



    deleteItem(){
    if(this.index > -1) {
      this.items.splice(this.index, 1);
      this.dataService.save(this.items);
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.setRoot(HomePage);
    } 
  }


 
}