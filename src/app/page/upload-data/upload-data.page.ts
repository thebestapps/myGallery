import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { DatePipe } from '@angular/common';
import { Share } from '@capacitor/share';

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
  providers: [DatePipe],
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
  storeTakeImg: any;
  savedUrl: any;
  myDate: any = new Date();

  url_: any;
  url2_: any;
  audioData: any = [];
  GetAudioURL: any;
  constructor(
    public config: CommonService,
    public fb: FormBuilder,
    private storage: Storage,
    private domSanitizer: DomSanitizer,
    public Api: ApiService,
    private platform: Platform,
    private Loading: LoadingController,
    public changeDef: ChangeDetectorRef,
    private datePipe: DatePipe,
    private alertController: AlertController
  ) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.form_details = this.fb.group({
      title: [''],
      note: [''],
    });
  }

  ngOnInit() {
    this.storage.create();
    this.loadFile();
    this.audioLoad();
    VoiceRecorder.requestAudioRecordingPermission();
  }
  upload_Img: any;
  playRecording() {}
  ionViewWillEnter() {
    // this.loadRecordFile();
    this.audioLoad();
    this.selected_method = JSON.parse(
      this.config.storageGet('choose_file')['__zone_symbol__value']
    );

    if (this.config.editable_data != undefined) {
      console.log('editable data');

      this.editable_data = this.config.editable_data;
      this.url2_ = this.editable_data.audio;
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
    } else {
      console.log('not editable data');

      if (this.selected_method == 1) {
        this.upload_file = true;
        this.take_file = false;
        this.img_ = this.config.selected_img;
        console.log('load img23232323-----', this.img_.path);
        this.upload_Img = this.img_.path;
        console.log('load img23232323-----', this.upload_Img);
        this.readFile(this.img_);

        // let img = this.config.selected_img;
        // this.selected_img = 'https://backend.myplotpic.com/uploads/' + img;
      }

      if (this.selected_method == 2) {
        this.upload_file = false;
        this.take_file = true;
        this.selected_img1 = this.config.Takeimg;
        this.storeTakeImg = this.config.storeTakeImg;
        console.log('load img3333', this.storeTakeImg);
      }
    }
  }

  async shareData() {
    await Share.share({
      title: 'this.form_details.title.value',
      text: 'this.form_details.note.value',
      url: this.storeTakeImg,
      dialogTitle: 'Share',
    });
  }

  audioLoad() {
    Filesystem.readdir({
      path: '',
      directory: Directory.Data,
    }).then((result) => {
      console.log('auido res', result);
      this.storedFileName = result.files;

      this.AudioloadFileData(result.files.map((x) => x.uri));
    });
  }

  async AudioloadFileData(fileNames: string[]) {
    console.log('file name', fileNames);

    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;
      console.log('filesystem@@@@@@@@', filePath);
      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath,
      });
      console.log('read file name', readFile);

      this.audioData.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`,
      });
      // console.log('read', this.images);
    }
  }
  async startRecording_() {
    console.log('en start');
    if (this.url_ || this.url2_) {
      this.AudioDiscardAlert();
    } else {
      if (this.recording_) {
        return;
      }
      this.recording_ = true;
      VoiceRecorder.startRecording();
    }
  }

  stopRecording_() {
    this.url2_ = false;

    console.log('en stop');
    if (!this.recording_) {
      return;
    }
    this.recording_ = false;

    VoiceRecorder.stopRecording().then((res: RecordingData) => {
      console.log('stop res', res);

      if (res.value && res.value.recordDataBase64) {
        const recordData = res.value.recordDataBase64;
        console.log(recordData);
        this.url_ = `data:image/jpeg;base64,${recordData}`;
        console.log('image---------------------', this.url_);
        const fileName = new Date().getTime() + '.mp3';
        const audioFIle = Filesystem.writeFile({
          path: fileName,
          directory: Directory.Data,
          data: recordData,
        });
        console.log('Auido FILE__________', audioFIle);

        let file = audioFIle.then((res) => {
          console.log('Auido FILE__________2222', res.uri);
          this.GetAudioURL = res.uri;
        });
        this.audioLoad();
      }
    });
  }

  async AudioDiscardAlert() {
    const loading = await this.alertController.create({
      message: 'Do You Want Delete Exiting Audio',
      buttons: [
        {
          text: 'Cancel',
          role: '',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.url_ = undefined;
            this.url2_ = undefined;
          },
        },
      ],
    });
    await loading.present();
  }

  async readFile(photo: Photo) {
    this.selected_img = await this.readAsBase64(photo);
    this.selected_img = `data:image/jpeg;base64,${this.selected_img}`;
    console.log('image---------------------', this.selected_img);
  }

  async saveImage(photo: Photo) {
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
    console.log('file name of image', fileNames);

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
        createAt: this.myDate,
        data: this.form_details.value,
        img: this.upload_Img,
        shareimg: this.upload_Img,
        sharetakeImg: this.storeTakeImg,
        takeImg: this.storeTakeImg,
        audio: this.GetAudioURL,
        shareAudio: this.GetAudioURL,
      };

      this.all_data.push(send);
      this.config.storageSave('all_data', this.all_data);
      this.form_details.reset();
      this.config.editable_data = undefined;
      this.config.navigate('home');
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
        el.sharetakeImg = this.editable_data.sharetakeImg;
        el.takeImg = this.selected_img1;
        el.audio = this.url_;
      }
    });
    this.config.storageSave('all_data', this.all_data);
    this.form_details.reset();
    this.config.editable_data = undefined;
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
