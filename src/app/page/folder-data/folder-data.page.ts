import { Component, OnInit } from '@angular/core';
import { TakephotoService } from 'src/app/services/takephoto.service';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';
import {
  ActionSheetController,
  LoadingController,
  Platform,
} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { FileUploader } from 'ng2-file-upload';
import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { ImgMaxSizeService } from 'ng2-img-max';
const URL_ = '';

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
const IMAGE_DIR = 'stored-images';
interface LocalFile {
  label: String;
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-folder-data',
  templateUrl: './folder-data.page.html',
  styleUrls: ['./folder-data.page.scss'],
})
export class FolderDataPage implements OnInit {
  result: any;
  logo: any;
  selectedId: any;
  tab: number = 1;
  all_photos = true;
  all_folders = false;
  photo_data: any = [];
  small_grid_active = true;
  large_grid_active = false;
  folder_option = false;
  Create_folder_form = false;
  ion_header = true;
  ion_footer = true;
  user: any;
  searchText = '';
  allFolder: any = [];
  MyDate: any;
  header_data: any;
  sixMonth: any;

  filteredImages: any[] = [];
  selectedInterval: string = '';

  isLoading = false;
  images: LocalFile[] = [];

  myImg: any = [];
  getData: any = [];
  all_stored: any = [];
  constructor(
    public photoService: TakephotoService,
    public config: CommonService,
    private storage: Storage,
    private domSanitizer: DomSanitizer,
    private actionSheetCtrl: ActionSheetController,
    public Api: ApiService,
    // private imgMaxService: ImgMaxSizeService,
    private platform: Platform,
    private Loading: LoadingController
  ) {}

  ngOnInit() {
    this.storage.create();
    // this.loadFile();
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    this.all_stored = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    this.allFolder = JSON.parse(
      this.config.storageGet('allFolder')['__zone_symbol__value']
    );
    if (this.all_stored != null) {
      this.header_data =
        this.all_stored[Math.floor(Math.random() * this.all_stored.length)];
    }
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
      this.config.navigate('upload-data');
    }
  }

  async saveImage(photo: Photo) {
    const base64Data: any = await this.readAsBase64(photo);

    const FileName = new Date().getTime() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${FileName}`,
      data: base64Data,
    });
  }

  async readAsBase64(photo: any) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });
      return file.data;
    } else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();
      return (await this.convertBlobToBase64(blob)) as String;
    }
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  takeImg: any;
  ionViewWillEnter() {
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );

    this.allFolder = JSON.parse(
      this.config.storageGet('allFolder')['__zone_symbol__value']
    );

    this.all_stored = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );
    console.log('get local data', this.all_stored);
    if (this.all_stored) {
      console.log('en---');

      // this.all_stored = JSON.parse(
      //   this.config.storageGet('all_data')['__zone_symbol__value']
      // );
      // console.log('get local data 222', this.all_stored);
      // this.filteredImages = this.photo_data;
      this.all_stored.forEach((res) => {
        this.getData = res;
        this.myImg = Capacitor.convertFileSrc(res.img);
        console.log('convert', this.myImg);

        this.takeImg = Capacitor.convertFileSrc(res.takeImg);
        console.log('convert takeImg', this.takeImg);

        let send = {
          img: this.myImg,
          createAt: this.getData.createAt,
          data: this.getData.data,
          id: this.getData.id,
          takeImg: this.takeImg,
        };
        this.localData.push(send);
        this.all_stored = this.removeDuplicates(this.localData, 'id');
        console.log('removed Dupli', this.all_stored);
        this.header_data =
          this.all_stored[Math.floor(Math.random() * this.all_stored.length)];
        this.MyDate = this.all_stored[0].createAt;
      });
    }
  }

  removeDuplicates(myArray, Prop) {
    return myArray.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[Prop]).indexOf(obj[Prop]) === pos;
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '6 Month',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.filterImages('sixMonths');
          },
        },
        {
          text: '1 Year Ago',
          data: {
            action: 'share',
          },
          handler: () => {
            this.filterImages('year');
          },
        },
        {
          text: '2 Year Ago',
          data: {
            action: 'share',
          },
          handler: () => {
            this.filterImages('two-years');
          },
        },
      ],
    });
    actionSheet.present();
  }

  filterImages(interval: string) {
    const currentDate = new Date();
    switch (interval) {
      case 'sixMonths':
        this.filteredImages = this.photo_data.filter((image) => {
          const imageMonth = image.createAt.getMonth();
          const currentMonth = currentDate.getMonth();
          return Math.abs(imageMonth - currentMonth) <= 6;
        });
        break;
      case 'year':
        this.filteredImages = this.photo_data.filter((image) => {
          const imageYear = image.createAt.getFullYear();
          const currentYear = currentDate.getFullYear();
          return currentYear - imageYear === 1;
        });
        break;
      case 'two-years':
        this.filteredImages = this.photo_data.filter((image) => {
          const imageYear = image.createAt.getFullYear();
          const currentYear = currentDate.getFullYear();
          return currentYear - imageYear <= 2;
        });
        break;
      default:
        this.filteredImages = this.photo_data;
        break;
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

  localData: any = [];
  photo: any = [];
  deleteData(val) {
    console.log(val);

    this.selectedId = val.id;

    var un = this.all_stored.filter((val2) => {
      return val2.id !== val.id;
    });
    // this.photo_data = un;

    this.filteredImages = un;
    let arrDel = un;

    console.log('all record', arrDel);

    // this.config.storageSave('all_data', this.all_stored);
    // this.photo_data = JSON.parse(
    //   this.config.storageGet('all_data')['__zone_symbol__value']
    // );

    let arrr = this.removeDuplicates(arrDel, 'id');
    console.log('remove duplicate', arrr);
    this.config.storageSave('all_data', arrr);
    // console.log('get daat', this.all_stored);
    console.log('store Data', arrr);

    this.photo = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    console.log('store Data 2222', this.photo);
    // this.filteredImages = this.photo_data;
    this.photo.forEach((res) => {
      console.log('loop respone', res);

      this.getData = res;
      this.myImg = Capacitor.convertFileSrc(res.img);
      // console.log('loacl path', this.myImg);
      let send = {
        img: this.myImg,
        createAt: this.getData.createAt,
        data: this.getData.data,
        id: this.getData.id,
      };
      this.localData.push(send);
      console.log('stored img', this.localData);
      this.all_stored = this.removeDuplicates(this.localData, 'id');
      console.log('remove duplicate', this.all_stored);
    });
    this.all_stored = this.removeDuplicates(this.localData, 'id');
  }

  navigate(n) {
    if (n == '1') {
      this.config.navigate('home');
    }
    if (n == '2') {
      this.config.navigate('folder-data');
    }
  }

  navigateFolder(val, n) {
    if (n == 'open folder') {
      this.config.selected_folder = val;
      this.config.navigate('view-item');
    }
  }
  // grid_content = false;
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

  more_options() {
    this.folder_option = !this.folder_option;
  }

  CreateFolder(n) {
    if (n == 'folder') {
      this.config.navigate('folder-data/create-folder');
    }
  }

  EditFolderName() {}

  filterItems(event) {
    const val = event.target.value;
    this.photo_data = this.photo_data.filter((item) => {
      return item.title.toLocaleLowerCase().includes() > -1;
    });
  }

  audioSource: any;
  async stopPlay(val) {
    this.selectedId = val.id;

    var Aud = this.photo_data.filter((val2) => {
      return val2.id == this.selectedId;
    });
    this.audioSource = Aud;

    // console.log(this.audioSource);

    const file = new File([this.audioSource], 'audio.mp3');
    // console.log(file);

    const frr = URL.createObjectURL(file);
    // console.log(frr);

    var snd = new Audio(frr);
    // console.log(snd);

    snd.play();
  }
}
