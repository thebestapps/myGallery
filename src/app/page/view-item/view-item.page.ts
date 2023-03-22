import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.function';
import { TakephotoService } from '../../services/takephoto.service';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {
  title = 'micRecorder';
  record;
  recording = false;
  url;
  error;

  tab: number = 1;
  selected_img: any;
  form_details: any;
  all_data: any = [];
  editable_data: any;
  audioSource1: any;
  draft_update_btn = false;
  audio_: any;

  constructor(
    public photoService: TakephotoService,
    public config: CommonService,
    private storage: Storage,
    public fb: FormBuilder
  ) {
    this.form_details = this.fb.group({
      title: [''],
      note: [''],
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.config.editable_data != undefined) {
      this.editable_data = this.config.editable_data;
      console.log(this.editable_data);
      
      this.form_details = this.fb.group({
        title: this.editable_data.data.title,
        note: this.editable_data.data.note,
      });

      this.selected_img = this.editable_data.img;
      this.draft_update_btn = true;
    }
    if (!this.config.editable_data) {
      this.selected_img = this.config.selected_img;
      console.log(this.selected_img);
    }
  }
}
