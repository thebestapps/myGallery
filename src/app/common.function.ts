import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  orderNo: any;
  options: any = {};
  Apiurl: any;
  userloggedin = false;
  appPages: any;
  propType: any;
  taskType: any;
  furnishingType: any;
  selectedVul: any;
  selectedTenant: any;
  all_prop_data: any;
  all_tenants_data: any;
  all_tasks_res: any;
  all_lease_res: any;
  message_templates = false;
  email_templates = false;
  whatsapp_templates = false;
  push_templates = false;
  selected_theme: any;
  currentLeaseDetails: any;
  taskCreate: any;
  navigateurlname: any;
  navigate_data_store: any;

  selected_name: any;
  pdf_data: any;
  editable_data: any;
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private storage: Storage,
    public toastController: ToastController,
    private location: Location
  ) {
    this.variables_load();
  }

  async alert_(m) {
    const alert = await this.alertController.create({
      header: '',
      message: m,

      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
      ],
    });

    await alert.present();
  }

  async storageSave(name, name1) {
    if (name && name1) {
      this.storage.remove(name);
      localStorage.removeItem(name);
      this.storage.set(name, name1);
      localStorage.setItem(name, JSON.stringify(name1));
    }
  }

  async storageClear() {
    this.storage.clear();
    localStorage.clear();
  }

  async storageGet(get) {
    let val2 = localStorage.getItem(get);
    this.storage.get(get).then((val) => {
      let val2 = val;
      return val2;
    });
    return val2;
  }

  async navigate(page) {
    this.navCtrl.navigateForward(page);
  }

  async storageRemoveItem(key) {
    localStorage.removeItem(key);
    this.storage.remove(key);
  }
  async presentToast(m, style) {
    const toast = await this.toastController.create({
      message: m,
      duration: 2000,
      cssClass: style,
    });
    toast.present();
  }

  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  NavigateBack() {
    this.location.back();
  }

  variables_load() {
    this.furnishingType = [
      {
        id: 1,
        text: 'Unfurnished',
      },
      {
        id: 2,
        text: 'Semi Furnished',
      },
      {
        id: 3,
        text: 'Fully Furnished',
      },
    ];
    this.taskType = [
      {
        id: 1,
        text: 'long-term checkups',
      },

      {
        id: 2,
        text: 'Doors, gates, windows, and other openings',
      },
      {
        id: 3,
        text: 'Lighting',
      },
      {
        id: 4,
        text: 'Plumbing',
      },
      {
        id: 5,
        text: 'Fire equipment',
      },
      {
        id: 6,
        text: 'Heating and Cooling',
      },
      {
        id: 7,
        text: 'Construction works',
      },
      {
        id: 8,
        text: 'HVAC',
      },

      {
        id: 8,
        text: 'Custom Category',
      },
    ];

    this.propType = [
      {
        id: 1,
        text: 'Residential',
      },
      {
        id: 1,
        text: 'Commercial',
      },
      {
        id: 1,
        text: 'Apartment',
      },
      {
        id: 1,
        text: 'Shopping Center',
      },
      {
        id: 1,
        text: 'Industrial',
      },
      {
        id: 1,
        text: 'Parking Space',
      },
    ];
  }
}
