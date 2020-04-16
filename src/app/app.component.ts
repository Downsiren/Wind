/*
 * @Description: 
 * @Author: zhangxin
 * @Date: 2020-03-31 20:53:43
 * @LastEditTime: 2020-04-10 14:53:52
 * @LastEditors: zhangxin
 */
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DbmanageService } from './services/DbService/dbmanage.service';
import { WifimanageService } from './services/WifiService/wifimanage.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dbmanage: DbmanageService,
    private wifimanage : WifimanageService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.dbmanage.initDatabase();
      this.wifimanage.wifiConnection();
    });
  }
}
