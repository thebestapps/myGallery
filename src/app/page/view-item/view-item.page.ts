import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.function';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { TakephotoService } from 'src/app/services/takephoto.service';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Directory, Filesystem } from '@capacitor/filesystem';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}
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
  constructor(
    public config: CommonService,
    public photoService: TakephotoService,
    private plt: Platform,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.loadFiles();
  }

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
    this.config.navigate('folder-data');
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
    var un = this.photo_data.filter((val2) => {
      return this.selectedItem.every((y) => y.id !== val2.id);
    });
    console.log(un);

    this.photo_data = un;
    this.config.storageSave('all_data', this.photo_data);
  }

  addPhotoToGallery() {
    this.config.storageSave('choose_file', 2);
    this.photoService.addNewToGallery();
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
      this.saveImage(image);
    }
  }

  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
      directory: Directory.Data,
    });

    // Reload the file list
    // Improve by only loading for the new image and unshifting array!
    this.loadFiles();
  }

  private async readAsBase64(photo: any) {
    if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  // Helper function
  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  images: LocalFile[] = [];
  async loadFiles() {
    this.images = [];

    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });
    await loading.present();

    Filesystem.readdir({
      path: IMAGE_DIR,
      directory: Directory.Data,
    })
      .then(
        (result) => {
          this.loadFileData(result.files.map((x) => x.name));
        },
        async (err) => {
          // Folder does not yet exists!
          await Filesystem.mkdir({
            path: IMAGE_DIR,
            directory: Directory.Data,
          });
        }
      )
      .then((_) => {
        loading.dismiss();
      });
  }

  // Get the actual base64 data of an image
  // base on the name of the file
  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });

      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`,
      });
    }
  }
}
