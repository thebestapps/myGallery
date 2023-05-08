import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.scss'],
})
export class CreateFolderComponent implements OnInit {
  allFolder: any = [];
  folder_name: any;
  constructor(public config: CommonService) {}

  ngOnInit() {}

  selectData(dateVal) {
    this.folder_name = dateVal;
  }

  CreateFolder(n) {
    if (n == 'back') {
      this.config.navigate('folder-data');
    }
    if (n == 'create') {
      this.allFolder = [];
      let allFolder = JSON.parse(
        this.config.storageGet('allFolder')['__zone_symbol__value']
      );
      if (allFolder != undefined) {
        this.allFolder = allFolder;
      }

      let send = {
        id: this.config.generateUniqueId(),
        folder_name: this.folder_name,
      };
      this.allFolder.push(send);
      this.config.storageSave('allFolder', this.allFolder);
      this.folder_name = '';
      this.config.navigate('folder-data');
    }
  }

  EditFolderName() {}
}
