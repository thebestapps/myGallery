import { Component } from '@angular/core';
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

  takeImg: any;

  galleryItems: any[] = [
    { title: 'Item 1', date: '2022-05-10' },
    { title: 'Item 2', date: '2022-05-11' },
    { title: 'Item 3', date: '2022-05-11' },
    { title: 'Item 4', date: '2022-05-12' },
  ];
  groupedItems: any = [];
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
    // if (this.user) {
    this.photo_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    this.allFolder = JSON.parse(
      this.config.storageGet('allFolder')['__zone_symbol__value']
    );
    if (this.photo_data != null) {
      this.header_data =
        this.photo_data[Math.floor(Math.random() * this.photo_data.length)];
    }
    // }
  }

  // async loadFile() {
  //   this.images = [];
  //   const loading = await this.Loading.create({
  //     message: 'Loading Data...',
  //   });
  //   await loading.present();

  //   Filesystem.readdir({
  //     directory: Directory.Data,
  //     path: IMAGE_DIR,
  //   })
  //     .then(
  //       (result) => {
  //         // console.log('Here', result);
  //         this.loadFileData(result.files.map((x) => x.name));
  //       },
  //       async (err) => {
  //         await Filesystem.mkdir({
  //           directory: Directory.Data,
  //           path: IMAGE_DIR,
  //         });
  //       }
  //     )
  //     .then((_) => {
  //       loading.dismiss();
  //     });
  // }

  // async loadFileData(fileNames: string[]) {
  //   for (let f of fileNames) {
  //     const filePath = `${IMAGE_DIR}/${f}`;
  //     const readFile = await Filesystem.readFile({
  //       directory: Directory.Data,
  //       path: filePath,
  //     });
  //     this.images.push({
  //       label: 'hello',
  //       name: f,
  //       path: filePath,
  //       data: `data:image/jpeg;base64,${readFile.data}`,
  //     });
  //     // console.log('read', this.images);
  //   }
  // }
  async SelectImage() {
    debugger;
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
    });
    // console.log('selected img-------',image);
    if (image) {
      console.log('isImage', image);

      this.config.storageSave('choose_file', 1);
      // this.logo = image;

      this.config.selected_img = image;
      console.log('file----', this.config.selected_img);
      this.config.navigate('upload-data');
      // this.saveImage(image);
    }
  }

  async saveImage(photo: Photo) {
    const base64Data: any = await this.readAsBase64(photo);
    // console.log('based64 data-------',base64Data);

    const FileName = new Date().getTime() + '.jpeg';
    // console.log('file name ------',FileName);

    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${FileName}`,
      data: base64Data,
    });
    // console.log('save file', savedFile);
    // this.loadFile();
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

  myImg: any = [];
  getData: any = [];
  all_stored: any = [];
  getAudio: any = [];
  ionViewWillEnter() {
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    // if (this.user) {
    this.photo_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    this.allFolder = JSON.parse(
      this.config.storageGet('allFolder')['__zone_symbol__value']
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
        this.getAudio = Capacitor.convertFileSrc(res.audio);
        console.log('load loacl audio', this.getAudio);

        let send = {
          img: this.myImg,
          createAt: this.getData.createAt,
          data: this.getData.data,
          id: this.getData.id,
          takeImg: this.takeImg,
          audio: this.getAudio,
        };
        this.all_stored.push(send);
        console.log('stored img', this.all_stored);
      });

      this.all_stored = this.removeDuplicates(this.all_stored, 'id');
      console.log('remove duplicate', this.all_stored);

      // Capacitor.convertFileSrc(this);
      // console.log('home img', this.filteredImages);

      this.header_data =
        this.all_stored[Math.floor(Math.random() * this.all_stored.length)];
      this.MyDate = this.all_stored[0].createAt;
    }

    this.groupItemsByDate();
    // }
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
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   data: {
        //     action: 'cancel',
        //   },
        // handler: () => {
        //   this.filteredImages = this.allImages;
        // },
        // },
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
    debugger;
    this.selectedId = val.id;
    console.log('selected id =', this.selectedId, +' match id =', val.id);

    this.config.navigate('upload-data');
    this.config.editable_data = val;
    console.log('isEditable Data ava', this.config.editable_data);
  }
  localData: any = [];
  deleteData(val) {
    this.selectedId = val.id;

    var un = this.all_stored.filter((val2) => {
      return val2.id !== val.id;
    });
    // this.photo_data = un;
    this.all_stored = un;
    this.config.storageSave('all_data', this.all_stored);

    // this.filteredImages = un;
    // let arrDel = un;

    // console.log('all record', arrDel);

    // // this.config.storageSave('all_data', this.all_stored);
    // // this.photo_data = JSON.parse(
    // //   this.config.storageGet('all_data')['__zone_symbol__value']
    // // );

    // let arrr = this.removeDuplicates(arrDel, 'id');
    // console.log('remove duplicate', arrr);
    // this.config.storageSave('all_data', arrr);
    // // console.log('get daat', this.all_stored);
    // console.log('store Data', arrr);

    // let photo = JSON.parse(
    //   this.config.storageGet('all_data')['__zone_symbol__value']
    // );

    // console.log('store Data 2222', photo);
    // // this.filteredImages = this.photo_data;
    // photo.forEach((res) => {
    //   this.getData = res;
    //   this.myImg = Capacitor.convertFileSrc(res.img);
    //   console.log('loacl path', this.myImg);
    // });
    // let send = {
    //   img: this.myImg,
    //   createAt: this.getData.createAt,
    //   data: this.getData.data,
    //   id: this.getData.id,
    // };
    // this.localData.push(send);
    // console.log('stored img', this.localData);

    // this.all_stored = this.removeDuplicates(this.localData, 'id');
    // console.log('remove duplicate', this.all_stored);
  }

  navigate(n) {
    if (n == '1') {
      this.all_photos = true;
      this.all_folders = false;
    }
    if (n == '2') {
      this.all_photos = false;
      this.all_folders = true;
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
  folder_name: any;
  selectData(dateVal) {
    this.folder_name = dateVal;
  }

  CreateFolder(n) {
    if (n == 'folder') {
      this.Create_folder_form = true;
      this.all_photos = false;
      this.all_folders = false;
      this.ion_header = false;
      this.ion_footer = false;
    }
    if (n == 'back') {
      this.Create_folder_form = false;
      this.all_photos = false;
      this.all_folders = true;
      this.ion_header = true;
      this.ion_footer = true;
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
      // console.log(this.allFolder);
      this.config.storageSave('allFolder', this.allFolder);
      this.folder_name = '';
      this.Create_folder_form = false;
      this.all_photos = false;
      this.all_folders = true;
      this.ion_header = true;
      this.ion_footer = true;
    }
  }

  EditFolderName() {}

  filterItems(event) {
    const val = event.target.value;

    this.photo_data = this.photo_data.filter((item) => {
      // console.log(item);

      return item.title.toLocaleLowerCase().includes() > -1;
    });
  }

  // audioSource: any;
  // async stopPlay(val) {
  //   this.selectedId = val.id;

  //   var Aud = this.photo_data.filter((val2) => {
  //     return val2.id == this.selectedId;
  //   });
  //   this.audioSource = Aud;

  //   // console.log(this.audioSource);

  //   const file = new File([this.audioSource], 'audio.mp3');
  //   // console.log(file);

  //   const frr = URL.createObjectURL(file);
  //   // console.log(frr);

  //   var snd = new Audio(frr);
  //   // console.log(snd);

  //   snd.play();
  // }

  // EnableOneTime = false;
  // uploadingTrue = false;
  // PercenProgress = '0.0';
  // progress: number = 0;
  // configprogress: any;
  // propertyImages: any;
  // URL: any;
  // public uploader: FileUploader = new FileUploader({
  //   url: URL_,
  // });
  // compressedImage: any;
  // async SelectChn(whichOne) {
  //   this.config.storageSave('choose_file', 1);
  //   this.EnableOneTime = true;

  //   this.uploader.queue.forEach((element) => {
  //     // // console.log(element._file);
  //     const file = element._file;
  //     // this.imgMaxService.compressImage(file, 0.5).subscribe((result) => {
  //     //   this.compressedImage = result;
  //     //   // // console.log(this.compressedImage);
  //     //   if (
  //     //     'image/jpeg' == this.compressedImage.type ||
  //     //     'image/png' == this.compressedImage.type
  //     //   ) {
  //     //     if (this.EnableOneTime) {
  //     //       this.EnableOneTime = false;

  //     //       if (whichOne == 'propertyimage') {
  //     //         this.Update_files_IMAGES(this.compressedImage);
  //     //       }
  //     //     }
  //     //   } else {
  //     //     this.config.presentToast('Image is not acceptable.', '');
  //     //   }
  //     // });
  //   });
  // }

  // async Update_files_IMAGES(n) {
  //   // // console.log(n);

  //   this.isLoading = true;
  //   let formData = new FormData();
  //   formData.append('files', n);
  //   // // console.log(formData);

  //   let user_id_ = JSON.parse(
  //     this.config.storageGet('user')['__zone_symbol__value']
  //   );

  //   let id_ = '62ac84f3135844106228e4a1';

  //   await this.Api.Post_data('api/' + id_ + '/updatefile', formData).subscribe(
  //     (event: HttpEvent<any>) => {
  //       this.uploadingTrue = true;
  //       // this.config.uploadingTrue = this.uploadingTrue;
  //       switch (event.type) {
  //         case HttpEventType.Sent:
  //           // // console.log('Request has been made!');
  //           this.PercenProgress = '0.10';
  //           break;
  //         case HttpEventType.ResponseHeader:
  //           // // console.log('Response header has been received!');
  //           break;
  //         case HttpEventType.UploadProgress:
  //           this.progress = Math.round(event.loaded * 100);

  //           this.configprogress = (
  //             Math.round(this.progress * 100) / 100
  //           ).toFixed(2);

  //           this.PercenProgress =
  //             '0.' + JSON.stringify(this.progress).slice(0, 1);

  //           break;
  //         case HttpEventType.Response:
  //           this.uploadingTrue = false;
  //           // this.config.uploadingTrue = this.uploadingTrue;
  //           this.configprogress = this.progress;
  //           this.configprogress = (
  //             Math.round(this.progress * 100) / 100
  //           ).toFixed(2);

  //           // // console.log(event);

  //           this.uploader.queue.forEach((element) => {
  //             if (element === n) {
  //               // // console.log('89989789797798');

  //               // // console.log(event.body.url[0]);

  //               element.url = event.body.url[0];

  //               this.logo = element.url;
  //               this.config.selected_img = this.logo;
  //               this.config.navigate('upload-data');
  //               this.isLoading = false;

  //               // this.propertyImages.forEach((element) => {
  //               //   // console.log(element.id);

  //               //   element.image = event.body.url[0];
  //               // });

  //               this.uploader.queue = [];
  //               return event.body.url[0];
  //             }
  //           });

  //           setTimeout(() => {
  //             this.PercenProgress = '0.0';
  //             this.progress = 0;
  //           }, 1500);
  //       }
  //     },
  //     (err) => {
  //       this.config.alert_('Error');
  //       // // console.log(JSON.stringify(err));
  //       return false;
  //     }
  //   );
  // }
}
