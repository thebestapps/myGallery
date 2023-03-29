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

  searchText = '';
  allFolder: any = [
    {
      id: 1,
      folder_name: 'My favorites',
      img: '../../../assets/img/onboarding-img-1.png',
      total_img: 345,
    },
    {
      id: 2,
      folder_name: 'Leh Ladakh Trip',
      img: '../../../assets/img/onboarding-img-2.png',
      total_img: 35,
    },
    {
      id: 3,
      folder_name: 'Mathura and Agra Trip',
      img: '../../../assets/img/onboarding-img-3.png',
      total_img: 67,
    },
    {
      id: 4,
      folder_name: 'Dharamshala Himachal Trip',
      img: '../../../assets/img/onboarding-img-4.png',
      total_img: 234,
    },
  ];
  constructor(
    public photoService: TakephotoService,
    public config: CommonService,
    private storage: Storage,
    private domSanitizer: DomSanitizer,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.storage.create();
  }

  ionViewWillEnter() {
    this.photo_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );
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
        },
        {
          text: '1 Year Ago',
          data: {
            action: 'share',
          },
        },
        {
          text: '2 Year Ago',
          data: {
            action: 'share',
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
    debugger
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

  CreateFolder(n) {
    if (n == 'create') {
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
