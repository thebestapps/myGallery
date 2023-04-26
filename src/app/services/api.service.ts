import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Platform } from '@ionic/angular';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Preferences } from '@capacitor/preferences';

import { CommonService } from '../common.function';
declare var db: any;

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
};

var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  dbReady = new BehaviorSubject(false);
  dbName = '';
  public storageName = 'codetodo';

  options: any = {};
  Apiurl: any;
  token = '';
  offlineMode: boolean = false;
  httpB: any;
  Apiurl_URL: any;

  constructor(
    private http: HttpClient,
    private platform: Platform,
    public config: CommonService
  ) {
    this.Apiurl = 'https://backend.myplotpic.com/';
  }

  add(keyName, value) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storageName], 'readwrite')
          .objectStore(this.storageName)
          .put(keyName, value);
        request.onsuccess = await function (event) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('error');
            reject(false);
          }
        };
      }
    });
  }

  get(keyName) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storageName], 'readwrite')
          .objectStore(this.storageName)
          .get(keyName);
        request.onsuccess = await function (event) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('error');
            reject(false);
          }
        };
      }
    });
  }

  delete_(keyName) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storageName], 'readwrite')
          .objectStore(this.storageName)
          .delete(keyName);
        request.onsuccess = await function (event) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('error');
            reject(false);
          }
        };
      }
    });
  }

  HttpRequest(
    method: 'POST' | 'GET' | 'PUT',
    url: string,
    requestBody: any
  ): any {
    this.token = '';
    this.token = JSON.parse(
      this.config.storageGet('token')['__zone_symbol__value']
    );

    console.log(this.token);

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json ',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    url = this.Apiurl + url;

    const headers = {};
  }

  ionViewDidEnter() {
    this.token = JSON.parse(
      this.config.storageGet("token")["__zone_symbol__value"]
    );
    this.token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFjODRmMzEzNTg0NDEwNjIyOGU0YTEiLCJpYXQiOjE2ODI0ODgyNzZ9.iY6PMYpXpoAH7Eaq52v2kpWBfjIDSBJ8i1iQkQxIujQ';

    // this.configuration_();
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  // Post_data(endPoint, data): Observable<any> {
  //   this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MGY5MTA5ZTIyYTkwZjQ0YmU3OGYiLCJpYXQiOjE2ODI0MjYwNTJ9._iRoY_-1OG3OHkeUpLJAgxyZCvfE8QId5QlU3dm5J2g';
  //   // this.token = JSON.parse(
  //   //   this.config.storageGet('token')['__zone_symbol__value']
  //   // );

  //   console.log(this.token);

  //   let url = this.Apiurl + endPoint;

  //   if (
  //     this.platform.is('ios') ||
  //     this.platform.is('android') ||
  //     this.platform.is('mobile')
  //   ) {
  //     return this.http
  //       .post(url, data, {
  //         reportProgress: true,
  //         observe: 'events',
  //         headers: new HttpHeaders({
  //           Accept: 'application/json ',
  //           'Access-Control-Allow-Origin': '*',
  //           Authorization: 'Bearer ' + this.token,
  //         }),
  //       })
  //       .pipe(
  //         tap((_) => {}),
  //         catchError(this.handleError(endPoint))
  //       );
  //   } else {
  //     return this.http
  //       .post(url, data, {
  //         reportProgress: true,
  //         observe: 'events',
  //         headers: new HttpHeaders({
  //           Accept: 'application/json ',
  //           'Access-Control-Allow-Origin': '*',
  //           Authorization: 'Bearer ' + this.token,
  //         }),
  //       })
  //       .pipe(
  //         tap((_) => {}),
  //         catchError(this.handleError(endPoint))
  //       );
  //   }
  // }

  Post_data(endPoint, data): Observable<any> {
    this.token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFjODRmMzEzNTg0NDEwNjIyOGU0YTEiLCJpYXQiOjE2ODI0ODgyNzZ9.iY6PMYpXpoAH7Eaq52v2kpWBfjIDSBJ8i1iQkQxIujQ';
    // this.token = JSON.parse(
    //   this.config.storageGet("token")["__zone_symbol__value"]
    // );

    console.log(this.token);

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     Authorization: "Bearer " + this.token,
    //   }),
    // };
    let url = this.Apiurl + endPoint;
    // console.log(httpOptions);

    if (
      this.platform.is('ios') ||
      this.platform.is('android') ||
      this.platform.is('mobile')
    ) {
      return this.http
        .post(url, data, {
          reportProgress: true,
          observe: 'events',
          headers: new HttpHeaders({
            Accept: 'application/json ',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.token,
          }),
        })
        .pipe(
          tap((_) => {}),
          catchError(this.handleError(endPoint))
        );
      // console.log("Advance_HTTP_POST");
      // return from(this.httpAdvanced.post(url, data, httpOptions)).pipe(
      //   map((data: any) => JSON.parse(data?.data))
      // );
    } else {
      return this.http
        .post(url, data, {
          reportProgress: true,
          observe: 'events',
          headers: new HttpHeaders({
            Accept: 'application/json ',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.token,
          }),
        })
        .pipe(
          tap((_) => {}),
          catchError(this.handleError(endPoint))
        );
    }
  }
  addUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  async create(key: string, value: any) {
    await Preferences.set({ key, value });
  }
  async read(key: string) {
    return await Preferences.get({ key });
  }
  async update(key: string, value: any) {
    await Preferences.set({ key, value });
  }
  async delete(key: string) {
    await Preferences.remove({ key });
  }
  async clear() {
    await Preferences.clear();
  }

  // async init(): Promise<void> {
  //   const info = await Device.getInfo();

  //   if (info.platform === 'android') {
  //     try {
  //       const sqlite = CapacitorSQLite as any;
  //       await sqlite.requestPermissions();
  //       this.setupDatabase();
  //     } catch (e) {
  //       const alert = await this.alertCtrl.create({
  //         header: 'No DB access',
  //         message: `This app can't work without Database access.`,
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     }
  //   } else {
  //     this.setupDatabase();
  //   }
  // }

  // private async setupDatabase() {
  //   const dbSetupDone = await Storage.get({ key: DB_SETUP_KEY });

  //   if (!dbSetupDone.value) {
  //     this.downloadDatabase();
  //   } else {
  //     this.dbName = (await Storage.get({ key: DB_NAME_KEY })).value;
  //     await CapacitorSQLite.open({ database: this.dbName });
  //     this.dbReady.next(true);
  //   }
  // }

  // // Potentially build this out to an update logic:
  // // Sync your data on every app start and update the device DB
  // private downloadDatabase(update = false) {
  //   this.http.get('https://devdactic.fra1.digitaloceanspaces.com/tutorial/db.json').subscribe(async (jsonExport: JsonSQLite) => {
  //     const jsonstring = JSON.stringify(jsonExport);
  //     const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });

  //     if (isValid.result) {
  //       this.dbName = jsonExport.database;
  //       await Storage.set({ key: DB_NAME_KEY, value: this.dbName });
  //       await CapacitorSQLite.importFromJson({ jsonstring });
  //       await Storage.set({ key: DB_SETUP_KEY, value: '1' });

  //       // Your potential logic to detect offline changes later
  //       if (!update) {
  //         await CapacitorSQLite.createSyncTable();
  //       } else {
  //         await CapacitorSQLite.setSyncDate({ syncdate: '' + new Date().getTime() })
  //       }
  //       this.dbReady.next(true);
  //     }
  //   });
  // }
}


