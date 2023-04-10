import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
<<<<<<< HEAD
    // SharedModule,
=======
    SharedModule,
>>>>>>> 4c0fc0c (apk+++)
    ReactiveFormsModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
