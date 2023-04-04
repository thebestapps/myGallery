import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.function';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {
  photo_data: any = [];
  searchText = '';
  small_grid_active = true;
  large_grid_active = false;
  folder_option = false;
  selected_folder: any;
  selectedId: any;
  select_item = false;
  selectedItem: any = [];
  constructor(public config: CommonService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.selected_folder = this.config.selected_folder;

    this.photo_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );
  }

  edit_data(val) {
    this.selectedId = val.id;
    this.config.navigate('upload-data');
    this.config.editable_data = val;
  }

  deleteData(val) {
    this.selectedId = val.id;
    var un = this.photo_data.filter((val2) => {
      return val2.id !== val.id;
    });
    this.photo_data = un;
    this.config.storageSave('all_data', this.photo_data);
  }

  active_grid(n) {
    if (n == 1) {
      this.small_grid_active = false;
      this.large_grid_active = true;
    }
    if (n == 2) {
      this.small_grid_active = true;
      this.large_grid_active = false;
    }
  }

  back() {
    this.config.navigate('home');
  }

  more_options() {
    this.folder_option = !this.folder_option;
  }

  selectItem() {
    this.select_item = !this.select_item;
    this.folder_option = false;
  }

  selectData(val) {
    this.selectedItem.push(val);
    console.log(this.selectedItem);
  }

  deleteSelectedItem() {
    console.log(this.selectedItem);

    var un = this.photo_data.filter((val2) => {
      return val2.id != this.selectedItem.id;
    });
    console.log(un);

    this.photo_data = un;
    this.config.storageSave('all_data', this.photo_data);
  }
}
