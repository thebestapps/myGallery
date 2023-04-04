import { Component } from '@angular/core';
import { TakephotoService } from 'src/app/services/takephoto.service';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';
import { ActionSheetController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(
    public photoService: TakephotoService,
    public config: CommonService,
    private storage: Storage,
    private domSanitizer: DomSanitizer,
    private actionSheetCtrl: ActionSheetController
  ) {}
  header_data: any;
  ngOnInit() {
    this.storage.create();

    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    if (this.user) {
      this.photo_data = JSON.parse(
        this.config.storageGet('all_data')['__zone_symbol__value']
      );

      this.allFolder = JSON.parse(
        this.config.storageGet('allFolder')['__zone_symbol__value']
      );
      if (this.photo_data) {
        this.header_data =
          this.photo_data[Math.floor(Math.random() * this.photo_data.length)];
      }
    }
    console.log(this.user);
  }
 
  ionViewWillEnter() {
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    if (this.user) {
      this.photo_data = JSON.parse(
        this.config.storageGet('all_data')['__zone_symbol__value']
      );

      this.allFolder = JSON.parse(
        this.config.storageGet('allFolder')['__zone_symbol__value']
      );
      if (this.photo_data) {
        this.header_data =
          this.photo_data[Math.floor(Math.random() * this.photo_data.length)];
      }
    }
    // console.log(this.user);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      // header: 'Example header',
      // subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '6 Month',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.photo_data.filter((item) => {
              console.log(item);
            });
          },
        },
        {
          text: '1 Year Ago',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('1 Year');
          },
        },
        {
          text: '2 Year Ago',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('2 Year');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  SelectLogo(e, n) {
    if (n == 1) {
      if (e.target.files) {
        var render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = (event: any) => {
          this.logo = event.target.result;
          this.config.selected_img = this.logo;
          this.config.navigate('upload-data');
        };
      }
    }
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
    console.log(un);

    this.photo_data = un;
    this.config.storageSave('all_data', this.photo_data);
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
      console.log(this.allFolder);
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
      console.log(item);

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

    console.log(this.audioSource);

    const file = new File([this.audioSource], 'audio.mp3');
    console.log(file);

    const frr = URL.createObjectURL(file);
    console.log(frr);

    var snd = new Audio(frr);
    console.log(snd);

    snd.play();
  }
}
