import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

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
  selected_img1: any;
  form_details: any;
  all_data: any = [];
  editable_data: any;
  audioSource1: any;
  draft_update_btn = false;
  audio_: any;

  add_label = true;
  add_note = false;
  add_audio = false;
<<<<<<< HEAD
<<<<<<< HEAD
  update_audio_section = false;
=======
>>>>>>> 4c0fc0c (apk+++)
=======

  recording_ = false;
  storedFileName: any = [];
  upload_file = false;
  take_file = false;
  selected_method: any;
  maxChars = 250;
  isTextarea: any;
  isMsg = false;

>>>>>>> b1d1df0 (filter ++)
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
    // VoiceRecorder.requestAudioRecordingPermission();
  }
<<<<<<< HEAD
  updateurl: any;
=======

>>>>>>> 4c0fc0c (apk+++)
  ionViewWillEnter() {
    this.selected_method = JSON.parse(
      this.config.storageGet('choose_file')['__zone_symbol__value']
    );

    if (this.config.editable_data != undefined) {
      this.editable_data = this.config.editable_data;
      this.form_details = this.fb.group({
        title: this.editable_data.data.title,
        note: this.editable_data.data.note,
      });
      if (this.editable_data.img) {
        this.upload_file = true;
        this.take_file = false;
        this.selected_img = this.editable_data.img;
      }
      if (this.editable_data.takeImg) {
        this.upload_file = false;
        this.take_file = true;
        this.selected_img1 = this.editable_data.takeImg;
      }

      console.log(this.selected_img);
      console.log(this.selected_img1);

<<<<<<< HEAD
      this.selected_img = this.editable_data.img;
<<<<<<< HEAD
      this.updateurl = this.editable_data.audio;
=======
=======
>>>>>>> b1d1df0 (filter ++)
      this.url = this.editable_data.audio;
>>>>>>> 4c0fc0c (apk+++)
      this.draft_update_btn = true;
    }
    if (!this.config.editable_data) {
      if (this.selected_method == 1) {
        console.log('1');

        this.upload_file = true;
        this.take_file = false;
        this.selected_img = this.config.selected_img;
        console.log(this.selected_img);
      }

      if (this.selected_method == 2) {
        console.log('2');
        this.upload_file = false;
        this.take_file = true;
        this.selected_img1 = this.config.Takeimg;
      }
    }
  }

  sanitize(url: string) {
<<<<<<< HEAD
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  
  sanitizeUpdate(updateurl: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(updateurl);
  }
=======
    console.log(url);

    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

>>>>>>> 4c0fc0c (apk+++)
  startRecording() {
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
    console.log(stream);

    var options = {
      mimeType: 'audio/wav',
      // numberOfAudioChannels: 1,
      // sampleRate: 16000,
      bitsPerSecond: 128000,
      bufferSize: 512,
      numberOfAudioChannels: 1,
      recorderType: StereoAudioRecorder,
    };
    console.log(options);

    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    console.log(this.record);

    this.record.record();
    console.log(this.record);
    // var internal = StereoAudioRecorder.getInternalRecorder();
    // console.log(internal);
  }

  stopRecording() {
    this.recording = false;
    this.record?.stop(this.processRecording.bind(this));
    console.log(this.record);
  }

  processRecording(blob) {
    if (blob.size == 2000000) {
      console.log('ens');
      this.stopRecording();
    }
    this.url = URL.createObjectURL(blob);
    console.log('blob', blob.size);
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
      takeImg: this.selected_img1,
      audio: this.url,
    };
    this.all_data.push(send);
    console.log(this.all_data);
    this.config.storageSave('all_data', this.all_data);
    this.config.navigate('home');
    this.form_details.reset();
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
        el.takeImg = this.selected_img1;
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

  selectData(val) {
    this.isTextarea = val;
    if (this.isTextarea.length < 10) {
      this.isMsg = true;
    } else {
      this.isMsg = false;
    }
  }
}
