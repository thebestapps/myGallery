import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewItemPageRoutingModule } from './view-item-routing.module';

import { ViewItemPage } from './view-item.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPipe } from '../../shared/pipe/filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewItemPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  
  ],
  declarations: [ViewItemPage,  FilterPipe],
})
export class ViewItemPageModule {}
