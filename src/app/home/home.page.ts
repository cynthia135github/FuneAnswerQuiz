import { Component } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../app.component.scss'],
})
export class HomePage {
  modekids = true;
  popup = false;

  constructor(public popoverController: PopoverController, public modalController: ModalController, public alertController: AlertController,private route: ActivatedRoute, private router: Router,public loadingController: LoadingController) {}

  // ngOnInit()
  // {
  //   this.presentAlert();
  // }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      cssClass: 'my-custom-class',
      message: '',
      duration: 800
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  gotoquiz(){
    this.presentLoading().then(() => this.router.navigate(["quizgame"]));
  }

  async settingsPopover(ev: any) {
    // const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      animated: false,
      cssClass: 'bottom-sheet-popover',
      // componentProps: {
      //   site: siteInfo
      // },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'WELCOME',
      subHeader: 'Katherine!',
      message: 'Click screen to dismiss idk if I should use this',
      backdropDismiss: true
    });
    await alert.present();
    // setTimeout(() => {
    //   alert.dismiss();
    // }, 1000);

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  ablekid(){
    this.modekids = !this.modekids;
    console.log(this.modekids);
  }
  gotomeet(){
    window.open('https://meet.google.com/avm-guoz-pax', '_system');
  }

}
