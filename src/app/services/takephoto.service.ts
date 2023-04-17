import { Injectable } from '@angular/core';
<<<<<<< HEAD
// import {
//   Camera,
//   CameraResultType,
//   CameraSource,
//   Photo,
// } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { Preferences } from '@capacitor/preferences';
=======
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
<<<<<<< HEAD
>>>>>>> 4c0fc0c (apk+++)
=======
import { CommonService } from '../common.function';
import { Platform } from '@ionic/angular';
>>>>>>> b1d1df0 (filter ++)
@Injectable({
  providedIn: 'root',
})
export class TakephotoService {
<<<<<<< HEAD
  constructor() {}
<<<<<<< HEAD
  // public async addNewToGallery() {
  //   // Take a photo
  //   const capturedPhoto = await Camera.getPhoto({
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Camera,
  //     quality: 100,
  //   });
  // }
=======
=======
  public photos: any = [];
  logo: any;
  constructor(public config: CommonService, private plt: Platform) {}
  capturedPhoto: any;
>>>>>>> b1d1df0 (filter ++)
  public async addNewToGallery() {
    // Take a photo
    this.capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    console.log(this.capturedPhoto);

    const response = await fetch(this.capturedPhoto.webPath);
    console.log('convert', response);

    const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
    // this.config.Takeimg = capturedPhoto;

    // this.config.navigate('upload-data');
    // this.photos.unshift({
    //   filepath: 'soon...',
    //   webviewPath: capturedPhoto.webPath,
    // });
  }
<<<<<<< HEAD
>>>>>>> 4c0fc0c (apk+++)
=======

  // private async readAsBase64(photo: Photo) {
  //   if (this.plt.is('hybrid')) {
  //     const file = await Filesystem.readFile({
  //       path: photo.path,
  //     });

  //     return file.data;
  //   } else {
  //     // Fetch the photo, read as a blob, then convert to base64 format
  //     const response = await fetch(photo.webPath);
  //     const blob = await response.blob();

  //     return (await this.convertBlobToBase64(blob)) as string;
  //   }
  // }

  // Helper function
  convertBlobToBase64 = (blob: Blob) =>
    new Promise(() => {
      const reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        this.logo = event.target.result;

        console.log('logo', this.logo);
        this.config.Takeimg = this.logo;
        this.config.navigate('upload-data');
      };
    });
>>>>>>> b1d1df0 (filter ++)
}
