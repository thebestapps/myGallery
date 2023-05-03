import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { Preferences } from '@capacitor/preferences';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { LoadingController, Platform } from '@ionic/angular';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { Capacitor } from '@capacitor/core';
const IMAGE_DIR = 'stored-images';
interface LocalFile {
  label: String;
  name: string;
  path: string;
  data: string;
}
const URL_ = '';
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
  updateurl: any;
  images: LocalFile[] = [];
  img_: any;

  constructor(
    public config: CommonService,
    public fb: FormBuilder,
    private storage: Storage,
    private domSanitizer: DomSanitizer,
    public Api: ApiService,
    private platform: Platform,
    private Loading: LoadingController,
    public changeDef: ChangeDetectorRef
  ) {
    this.form_details = this.fb.group({
      title: [''],
      note: [''],
    });
  }

  ngOnInit() {
    this.storage.create();
    this.loadFile();
    // VoiceRecorder.requestAudioRecordingPermission();
  }

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

  ionViewWillEnter() {
    // this.loadRecordFile();
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

      // this.selected_img = this.editable_data.img;
      this.updateurl = this.editable_data.audio;
      this.url = this.editable_data.audio;
      this.draft_update_btn = true;
    }
    if (!this.config.editable_data) {
      if (this.selected_method == 1) {
        this.upload_file = true;
        this.take_file = false;
        this.img_ = this.config.selected_img;
        this.readFile(this.img_);

        // let img = this.config.selected_img;
        // this.selected_img = 'https://backend.myplotpic.com/uploads/' + img;
      }

      if (this.selected_method == 2) {
        this.upload_file = false;
        this.take_file = true;
        this.selected_img1 = this.config.Takeimg;
      }
    }
  }

  async readFile(photo: Photo) {
    this.selected_img = await this.readAsBase64(photo);
    this.selected_img = `data:image/jpeg;base64,${this.selected_img}`;
    console.log('image---------------------', this.selected_img);
  }
  savedUrl: any;
  async saveImage(photo: Photo) {
    // console.log('en-----------------------');

    this.selected_img = await this.readAsBase64(photo);
    const FileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${FileName}`,
      data: this.selected_img,
    });
    console.log('save file', savedFile);
    this.savedUrl = savedFile.uri;
    console.log('save file--------', this.savedUrl);
  }

  async readAsBase64(photo: any) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });
      // console.log('filesystem-------', file);

      return file.data;
    } else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();
      return (await this.convertBlobToBase64(blob)) as String;
    }
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  async loadFile() {
    this.images = [];
    const loading = await this.Loading.create({
      message: 'Loading Data...',
    });
    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR,
    })
      .then(
        (result) => {
          console.log('Here', result);
          this.loadFileData(result.files.map((x) => x.name));
        },
        async (err) => {
          await Filesystem.mkdir({
            directory: Directory.Data,
            path: IMAGE_DIR,
          });
        }
      )
      .then((_) => {
        loading.dismiss();
      });
  }

  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;
      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath,
      });
      // console.log('filesystem@@@@@@@@', readFile);
      this.images.push({
        label: 'hello',
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`,
      });
      // console.log('read', this.images);
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

 async save_data() {
    this.saveImage(this.img_);

    this.all_data = [];
    let all_data = JSON.parse(
      this.config.storageGet('all_data')['__zone_symbol__value']
    );
    if (all_data != undefined) {
      this.all_data = all_data;
    }
    const loading = await this.Loading.create({
      message: 'Loading Data...',
    });
    await loading.present();

    setTimeout(() => {
      let send = {
        id: this.config.generateUniqueId(),
        createAt: new Date(),
        data: this.form_details.value,
        img: this.savedUrl,
        takeImg: this.selected_img1,
        audio: this.url,
      };

      this.all_data.push(send);
      this.config.storageSave('all_data', this.all_data);
      this.config.navigate('home');
      this.form_details.reset();
    }, 100);

    loading.dismiss();
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
  EnableOneTime = false;
  uploadingTrue = false;
  PercenProgress = '0.0';
  progress: number = 0;
  configprogress: any;
  propertyImages: any;
  URL: any;
  public uploader: FileUploader = new FileUploader({
    url: URL_,
  });
  async SelectChn(selId, whichOne) {
    this.EnableOneTime = true;

    this.uploader.queue.forEach((element) => {
      if (
        'image/jpeg' == element.file.type ||
        'image/png' == element.file.type
      ) {
        if (this.EnableOneTime) {
          this.EnableOneTime = false;

          if (whichOne == 'propertyimage') {
            this.Update_files_IMAGES(element, selId);
          }
        }
      } else {
        alert('error');
      }
    });
  }

  async Update_files_IMAGES(n, selId) {
    let formData = new FormData();
    formData.append('files', n.file.rawFile, n.file.name);

    let user_id_ = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );

    let id_ = user_id_._id;

    await this.Api.Post_data('api/' + id_ + '/updatefile', formData).subscribe(
      (event: HttpEvent<any>) => {
        this.uploadingTrue = true;
        // this.config.uploadingTrue = this.uploadingTrue;
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            this.PercenProgress = '0.10';
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded * 100);

            this.configprogress = (
              Math.round(this.progress * 100) / 100
            ).toFixed(2);

            this.PercenProgress =
              '0.' + JSON.stringify(this.progress).slice(0, 1);

            break;
          case HttpEventType.Response:
            this.uploadingTrue = false;
            // this.config.uploadingTrue = this.uploadingTrue;
            this.configprogress = this.progress;
            this.configprogress = (
              Math.round(this.progress * 100) / 100
            ).toFixed(2);

            console.log(event);

            this.uploader.queue.forEach((element) => {
              if (element === n) {
                console.log('89989789797798');

                console.log(event.body.url[0]);

                element.url = event.body.url[0];

                this.propertyImages.forEach((element) => {
                  console.log(element.id);
                  console.log(selId);
                  if (element.id == selId) {
                    element.image = event.body.url[0];
                  }
                });

                this.uploader.queue = [];
                return event.body.url[0];
              }
            });

            setTimeout(() => {
              this.PercenProgress = '0.0';
              this.progress = 0;
            }, 1500);
        }
      },
      (err) => {
        this.config.alert_('Error');
        console.log(JSON.stringify(err));
        return false;
      }
    );
  }
}
