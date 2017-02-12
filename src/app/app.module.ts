import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

 
@NgModule({
  declarations: [
    MyApp,
    TutorialPage,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}