import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadDataPageRoutingModule } from './upload-data-routing.module';

import { UploadDataPage } from './upload-data.page';
import { SafePipe } from '../../shared/pipe/safe.pipe';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadDataPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UploadDataPage, SafePipe],
  providers: [AudioRecordingService],
})
export class UploadDataPageModule {}
