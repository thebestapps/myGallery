import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.page.html',
  styleUrls: ['./upload-data.page.scss'],
})
export class UploadDataPage implements OnInit {
  selected_img: any;
  form_details: any;
  all_data: any = [];
  constructor(
    public config: CommonService,
    public fb: FormBuilder,
    private storage: Storage
  ) {
    this.form_details = this.fb.group({
      title: [''],
      note: [''],
      // audio: [''],
    });
  }

  ngOnInit() {
    this.storage.create();
  }
  ionViewWillEnter() {
    this.selected_img = this.config.selected_img;
    console.log(this.selected_img);
  }

  save_data() {
    let send = {
      data: this.form_details.value,
      img: this.selected_img,
    };
    this.all_data.push(send);
    this.config.storageSave('all_data', this.all_data);
    this.config.navigate('home');
    console.log(this.all_data);
  }
}
