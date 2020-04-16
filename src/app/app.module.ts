/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang xin
 * @Date: 2020-03-30 12:59:56
 * @LastEditors: zhangxin
 * @LastEditTime: 2020-04-08 23:03:02
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DbmanageService } from './services/DbService/dbmanage.service';
import { WifimanageService } from './services/WifiService/wifimanage.service';
import { SocketService } from './services/SocketService/socket.service'
//import { PortService } from './services/PortService/port.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DbmanageService,
   // PortService,
    WifimanageService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
