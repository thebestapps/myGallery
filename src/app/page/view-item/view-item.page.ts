import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.function';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { TakephotoService } from 'src/app/services/takephoto.service';
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
  takeImg: any;
  constructor(
    public config: CommonService,
    public photoService: TakephotoService
  ) {
    
  }

  ngOnInit() {}

  myImg: any = [];
  getData: any = [];
  all_stored: any = [];
  MyDate: any;
  groupedItems: any = [];
  ionViewWillEnter() {
    this.selected_folder = this.config.selected_folder;
    // if (this.user) {
    this.photo_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    if (this.photo_data) {
      this.photo_data = JSON.parse(
        this.config.storageGet('all_data')['__zone_symbol__value']
      );
      // this.filteredImages = this.photo_data;
      this.photo_data.forEach((res) => {
        this.getData = res;
        this.myImg = Capacitor.convertFileSrc(res.img);
        console.log('loacl path', this.myImg);
        this.takeImg = Capacitor.convertFileSrc(res.takeImg);
        let send = {
          img: this.myImg,
          createAt: this.getData.createAt,
          data: this.getData.data,
          id: this.getData.id,
          takeImg: this.takeImg,
        };
        this.all_stored.push(send);
        console.log('stored img', this.all_stored);
      });

      this.all_stored = this.removeDuplicates(this.all_stored, 'id');
      console.log('remove duplicate', this.all_stored);

      // Capacitor.convertFileSrc(this);
      // console.log('home img', this.filteredImages);

      this.MyDate = this.all_stored[0].createAt;
    }
    this.groupItemsByDate();
  }

  groupItemsByDate() {
    const groupedItems = this.all_stored.reduce((result, item) => {
      const date = item.createAt;
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(item);
      return result;
    }, {});
    this.groupedItems = Object.keys(groupedItems).map((date) => {
      return { date, items: groupedItems[date] };
    });
    console.log('filter data load', this.groupedItems);
  }

  removeDuplicates(myArray, Prop) {
    return myArray.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[Prop]).indexOf(obj[Prop]) === pos;
    });
  }

  async SelectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
    });
    if (image) {
      this.config.storageSave('choose_file', 1);
      this.config.selected_img = image;
      // console.log('file----',this.config.selected_img);
      this.config.navigate('upload-data');
    }
  }

  addPhotoToGallery() {
    this.config.storageSave('choose_file', 2);
    this.photoService.addNewToGallery();
  }

  edit_data(val) {
    this.selectedId = val.id;
    this.config.navigate('upload-data');
    this.config.editable_data = val;
  }

  deleteData(val) {
    this.selectedId = val.id;
    var un = this.all_stored.filter((val2) => {
      return val2.id !== val.id;
    });
    this.all_stored = un;
    this.config.storageSave('all_data', this.all_stored);
    this.groupItemsByDate();
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
  }

  deleteSelectedItem() {
    var un = this.all_stored.filter((val2) => {
      return this.selectedItem.every((y) => y.id !== val2.id);
    });
    console.log(un);

    this.all_stored = un;
    this.config.storageSave('all_data', this.all_stored);
  }
}
