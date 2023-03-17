import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  editable_data: any;
  audioSource1: any;

  constructor(
    public config: CommonService,
    public fb: FormBuilder,
    private storage: Storage
  ) {
    this.form_details = this.fb.group({
      title: [''],
      note: [''],
    });
  }
  audio: any;
  keys: string[] = [];
  recordAudio() {}

  ngOnInit() {
    this.storage.create();
  }

  ionViewWillEnter() {
    if (this.config.editable_data != undefined) {
      this.editable_data = this.config.editable_data;
      console.log(this.editable_data);
      this.form_details = this.fb.group({
        title: this.editable_data.data.title,
        note: this.editable_data.data.note,
        // audio: [''],
      });
      this.selected_img = this.editable_data.img;
      console.log(this.selected_img);
    }
    if (!this.config.editable_data) {
      this.selected_img = this.config.selected_img;
      console.log(this.selected_img);
    }
  }

  save_data() {
    // console.log(this.form_details.title.value);

    let send = {
      id: this.config.generateUniqueId(),
      data: this.form_details.value,
      img: this.selected_img,
      audio: this.audioSource1,
    };
    this.all_data.push(send);
    this.config.storageSave('all_data', this.all_data);
    this.config.navigate('home');
    console.log(this.all_data);
  }

  update_data() {
    // console.log(this.form_details.);

    let all_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    this.all_data = all_data;
    // debugger
    // this.draft_invoice_list
    this.all_data.forEach((el) => {
      console.log(el);
      console.log(el.id);

      if (this.config.editable_data.id == el.id) {
        console.log(this.config.editable_data.id);

        el.id = this.editable_data.id;
        el.data.title = this.form_details.controls['title'].value;
        el.data.note = this.form_details.controls['note'].value;
        el.img = this.selected_img;
        // el.audio = this.selected_bill_from;
      }
    });
    console.log(this.all_data);

    this.config.storageSave('all_data', this.all_data);
  }
}
