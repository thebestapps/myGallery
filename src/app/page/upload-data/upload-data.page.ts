import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';

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

  update_audio_section = false;

  recording_ = false;
  storedFileName: any = [];
  upload_file = false;
  take_file = false;
  selected_method: any;
  maxChars = 250;
  isTextarea: any;
  isMsg = false;

  constructor(
    public config: CommonService,
    public fb: FormBuilder,
    private storage: Storage,
    private domSanitizer: DomSanitizer,
    public Api: ApiService
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

  updateurl: any;

  // mediaRecorder: MediaRecorder | any;
  // recordedChunks: Blob[] = [];

  // startRecording_() {
  //   this.recording = true;
  //   navigator.mediaDevices
  //     .getUserMedia({ audio: true })
  //     .then((stream) => {
  //       this.mediaRecorder = new MediaRecorder(stream);
  //       this.mediaRecorder.addEventListener('dataavailable', (event) => {
  //         this.recordedChunks.push(event.data);
  //       });
  //       this.mediaRecorder.start();
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing microphone:', error);
  //     });
  // }

  // stopRecording_() {
  //   this.recording = false;
  //   if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
  //     this.mediaRecorder.stop();
  //     this.mediaRecorder = null;
  //   }
  // }

  // url_;
  // playRecording() {
  //   const blob = new Blob(this.recordedChunks, { type: 'audio/webm' });
  //   this.url_ = URL.createObjectURL(blob);
  //   console.log(this.url_);
  // }

  // >>>>>>> 242ed32 (filter ++)
  ionViewWillEnter() {
    this.selected_method = JSON.parse(
      this.config.storageGet('choose_file')['__zone_symbol__value']
    );
    console.log('slected method', this.selected_method);

    if (this.config.editable_data != undefined) {
      this.editable_data = this.config.editable_data;
      this.form_details = this.fb.group({
        title: this.editable_data.data.title,
        note: this.editable_data.data.note,
      });
      // if (this.editable_data.img) {
      //   this.upload_file = true;
      //   this.take_file = false;
      //   this.selected_img = this.editable_data.img;
      // }
      // if (this.editable_data.takeImg) {
      //   this.upload_file = false;
      //   this.take_file = true;
      //   this.selected_img1 = this.editable_data.takeImg;
      // }

      console.log(this.selected_img);
      console.log(this.selected_img1);

      // this.selected_img = this.editable_data.img;
      this.updateurl = this.editable_data.audio;
      this.url = this.editable_data.audio;
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
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  sanitizeUpdate(updateurl: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(updateurl);
  }

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
    var options = {
      mimeType: 'audio/mp3',
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
    this.Api.addUser(send).subscribe((response) => {
      console.log(response);
    });
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
