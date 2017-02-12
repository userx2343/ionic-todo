import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  // initialise title, description properties
 
  title;
  description;

  // include NavParams in order to get objects on home page 
 
  constructor(public navCtrl: NavController, public view: ViewController, public navParams : NavParams) {
 
  }
 
  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.navParams.get('test').saveItem(newItem);
    this.navCtrl.pop();
 
       
 
  }

  
 
  close(){
    this.view.dismiss();
  }
 
}


/*
saveItem (){
    if(!this.newItem.title && !this.newItem.description){
      return false;
    }
    let newItem = this.newItem;
    this.navParams.get('listPage').saveItem(newItem);
    this.newItem = {
      title: '',
      description: ''
    };
    this.nav.pop();
  }

  */