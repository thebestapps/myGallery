import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderDataPageRoutingModule } from './folder-data-routing.module';

import { FolderDataPage } from './folder-data.page';
import { SharedModule } from '../../shared/shared.module';
import { CreateFolderComponent } from './create-folder/create-folder.component';

@NgModule({
  declarations: [FolderDataPage,CreateFolderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderDataPageRoutingModule,
    SharedModule,
  ],
})
export class FolderDataPageModule {}
