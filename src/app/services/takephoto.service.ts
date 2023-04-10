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
>>>>>>> 4c0fc0c (apk+++)
@Injectable({
  providedIn: 'root',
})
export class TakephotoService {
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
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
>>>>>>> 4c0fc0c (apk+++)
}
