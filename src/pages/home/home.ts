import { Component } from '@angular/core';
import {LocalNotifications} from "@ionic-native/local-notifications";
import { NavController, Platform } from 'ionic-angular';
import * as moment from 'moment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timeText: string;
  timeNotify: Date;

  constructor(private localNotifications: LocalNotifications, public navCtrl: NavController, public platform: Platform) {
    this.timeText = moment(new Date()).format();
    this.timeNotify = new Date();
  }

  timeChange(time) {
    this.timeNotify = new Date();
    this.timeNotify.setHours(time.hour, time.minute, 0);
    console.log(new Date())
  }
  doAlert() {
    this.localNotifications.schedule({
      id: 101,
      title: 'Напоминание',
      text: 'Пора б полить цветы!',
      at: this.timeNotify,
      every: 'week'
    });
  }
}






