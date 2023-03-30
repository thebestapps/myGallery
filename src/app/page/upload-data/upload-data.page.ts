import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

// declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.page.html',
  styleUrls: ['./upload-data.page.scss'],
})
export class UploadDataPage implements OnInit {
  title = 'micRecorder';
  record;
  recording = false;
  url: any;
  error;

  tab: number = 1;
  selected_img: any;
  form_details: any;
  all_data: any = [];
  editable_data: any;
  audioSource1: any;
  draft_update_btn = false;
  audio_: any;

  add_label = true;
  add_note = false;
  add_audio = false;
  constructor(
    public config: CommonService,
    public fb: FormBuilder,
    private storage: Storage,
    private domSanitizer: DomSanitizer
  ) {
    this.form_details = this.fb.group({
      title: [''],
      note: [''],
    });
  }

  ngOnInit() {
    this.storage.create();
  }

  ionViewWillEnter() {
    if (this.config.editable_data != undefined) {
      this.editable_data = this.config.editable_data;
      this.form_details = this.fb.group({
        title: this.editable_data.data.title,
        note: this.editable_data.data.note,
      });

      this.selected_img = this.editable_data.img;
      this.url = this.editable_data.audio;
      this.draft_update_btn = true;
    }
    if (!this.config.editable_data) {
      this.selected_img = this.config.selected_img;
      // console.log(this.selected_img);
    }
  }

  sanitize(url: string) {
    console.log(url);
    
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  startRecording() {
    // debugger
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream) {
    var options = {
      mimeType: 'audio/wav',
      // numberOfAudioChannels: 1,
      // sampleRate: 16000,
    };
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }

  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log('blob', blob);
    console.log('url', this.url);
  }

  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  save_data() {
    this.all_data = [];
    let all_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );
    if (all_data != undefined) {
      this.all_data = all_data;
    }

    let send = {
      id: this.config.generateUniqueId(),
      createAt: new Date(),
      data: this.form_details.value,
      img: this.selected_img,
      audio: this.url,
    };
    this.all_data.push(send);
    console.log(this.all_data);
    this.config.storageSave('all_data', this.all_data);
    this.config.navigate('home');
  }

  update_data() {
    let all_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );

    this.all_data = all_data;
    this.all_data.forEach((el) => {
      if (this.config.editable_data.id == el.id) {
        el.id = this.editable_data.id;
        el.data.title = this.form_details.controls['title'].value;
        el.data.note = this.form_details.controls['note'].value;
        el.img = this.selected_img;
        el.audio = this.url;
      }
    });
    this.config.storageSave('all_data', this.all_data);
    this.config.navigate('home');
  }

  navigate(n: any) {
    if (n == '1') {
      // this.add_label = true;
      this.add_note = false;
      this.add_audio = false;
      this.tab = 1;
      this.add_label = !this.add_label;
    }
    if (n == '2') {
      this.add_label = false;
      // this.add_note = true;
      this.add_audio = false;
      this.tab = 2;
      this.add_note = !this.add_note;
    }
    if (n == '3') {
      this.add_note = false;
      this.add_label = false;
      // this.add_audio = true;
      this.tab = 3;
      this.add_audio = !this.add_audio;
    }
  }
  back() {
    this.config.navigate('home');
  }
}
