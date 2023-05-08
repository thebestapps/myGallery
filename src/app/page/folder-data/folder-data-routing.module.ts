import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderDataPage } from './folder-data.page';
import { CreateFolderComponent } from './create-folder/create-folder.component';

const routes: Routes = [
  {
    path: '',
    component: FolderDataPage,
  },
  {
    path: 'create-folder',
    component: CreateFolderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderDataPageRoutingModule {}
