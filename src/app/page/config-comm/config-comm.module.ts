/*
 * @Description: config-comm.module.ts
 * @Author: zhangxin
 * @Date: 2020-04-10 12:13:02
 * @LastEditTime: 2020-04-10 12:20:40
 * @LastEditors: zhangxin
 */
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { ConfigPage  } from './config-comm';

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      RouterModule.forChild([{ path: '', component: ConfigPage }])
    ],
    declarations: [ConfigPage]
  })
  export class ConfigPageModule {}
  