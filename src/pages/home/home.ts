import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Storage } from '@ionic/storage';
import { Data } from '../../providers/data';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public storage: Storage, public dataService: Data, public alertCtrl: AlertController, public platform: Platform) {
 
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = JSON.parse(todos); 
      }
 
    });
 
  }
 
  ionViewDidLoad(){

    this.platform.ready().then(() => {

       this.storage.get('introShown').then((result) => {
        if(!result){
          this.storage.set('introShown', true);
          this.navCtrl.setRoot(TutorialPage);
        }
        
      });
    });

 
  }
 
addItem(){
  	this.navCtrl.push(AddItemPage, {
      test: this
    })
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    let index: any = this.items.indexOf(item);
    this.navCtrl.push(ItemDetailPage, {
      item: item,
      index: index
    });
  }


  deleteItem(item){
  	console.log(item);
    let index: any = this.items.indexOf(item);
    console.log(index);
    if(index > -1) {
      this.items.splice(index, 1);
      this.dataService.save(this.items);
    } 
  }
 
}