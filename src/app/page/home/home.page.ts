import { Component } from '@angular/core';
import { TakephotoService } from 'src/app/services/takephoto.service';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: any;
  logo: any;
  photo_data: any = [];
  constructor(
    public photoService: TakephotoService,
    public config: CommonService,
    private storage: Storage
  ) {}
  ngOnInit() {
    this.storage.create();
  }
  ionViewWillEnter() {
    this.photo_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );
    console.log(this.photo_data);
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  SelectLogo(e, n) {
    console.log(n);

    if (n == 1) {
      if (e.target.files) {
        var render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = (event: any) => {
          this.logo = event.target.result;
          this.config.selected_img = this.logo;
          this.config.navigate('upload-data');
          // console.log(this.logo);
        };
      }
    }
  }

  selectedId: any;
  edit_data(val) {
    this.selectedId = val.id;
    this.config.navigate('upload-data');
    this.config.editable_data = val;
  }
}
