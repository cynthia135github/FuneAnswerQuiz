import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-quizgame',
  templateUrl: './quizgame.page.html',
  styleUrls: ['./quizgame.page.scss'],
})
export class QuizgamePage implements OnInit {

  gambar1 = "https://st.depositphotos.com/2032813/3942/i/600/depositphotos_39422499-stock-photo-a-hen-is-a-laying.jpg";
  gambar2 = "https://statics.indozone.news/content/2020/06/26/9DsA0z8/t_5ef555cee1396_700.jpg";
  gambar3 = "https://images.ctfassets.net/81iqaqpfd8fy/3r4flvP8Z26WmkMwAEWEco/870554ed7577541c5f3bc04942a47b95/78745131.jpg?w=1200&h=1200&fm=jpg&fit=fill";
  gambar4 = "https://c402277.ssl.cf1.rackcdn.com/photos/14206/images/hero_small/WW187785.jpg?1576774644";

  true_answer = "gambar2";

  check_answer = 1; //Status kalau belum jawab adl 1

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'GOOD',
      subHeader: '',
      message: `<img src="https://i.pinimg.com/originals/af/ff/52/afff522b4f568a7c897c8511b66dcb35.gif" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'INCORRECT',
      subHeader: '',
      message: `<img src="https://i.pinimg.com/originals/4f/80/f7/4f80f729a57b75abaef9dd13f4366c6f.gif" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  answer(jwb){
    //alert(jwb);
    if (jwb == this.true_answer){
      this.presentAlert();
      this.check_answer = 2; //jawaban benar maka status angka jdi 2
    }
    else{
      this.presentAlert2();
      this.check_answer = 3; // Jawaban salah maka status angka jadi 3
    }
  }

  
 

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

}
