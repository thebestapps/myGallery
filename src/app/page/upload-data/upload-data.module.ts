import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadDataPageRoutingModule } from './upload-data-routing.module';

import { UploadDataPage } from './upload-data.page';
import { SafePipe } from '../../shared/pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadDataPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UploadDataPage, SafePipe],
})
export class UploadDataPageModule {}
