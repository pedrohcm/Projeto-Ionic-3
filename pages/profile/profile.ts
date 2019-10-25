import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  testRadioOpen = true;
  testRadioResult = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  mostraAlertOlar() {
    let alert = this.alertCtrl.create({
      title: 'Olá',
      message: 'Tudo bem?',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertMassas() {
    let alert = this.alertCtrl.create({
      title: 'Massa',
      message: 'Peso',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertShows() {
    let alert = this.alertCtrl.create({
      title: 'Show!',
      message: 'Mesmo!',
      buttons: ['Ok']
    });
    alert.present()
  }

  mostraAlertOla() {
    let alert = this.alertCtrl.create({
      title: 'Olá',
      message: 'Tudo bem?',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertMassa() {
    let alert = this.alertCtrl.create({
      title: 'Massa',
      message: 'Peso',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertShow() {
    let alert = this.alertCtrl.create({
      title: 'Show!',
      message: 'Mesmo!',
      buttons: ['Ok']
    });
    alert.present()
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    alert.addInput({ type: 'radio', label: 'Blue', value: 'blue', checked: true });
    alert.addButton('Cancel');
    alert.addButton({ text: 'OK', handler: data => { this.testRadioOpen = false; this.testRadioResult = data; } });
    alert.present();
  }

  mostraAlertHi() {
    let alert = this.alertCtrl.create({
      title: 'Olá',
      message: 'Tudo bem?',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertHello() {
    let alert = this.alertCtrl.create({
      title: 'Massa',
      message: 'Peso',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertShow2s() {
    let alert = this.alertCtrl.create({
      title: 'Show!',
      message: 'Mesmo!',
      buttons: ['Ok']
    });
    alert.present()
  }
}