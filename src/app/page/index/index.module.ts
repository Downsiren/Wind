/*
 * @Description: index.module.ts
 * @Author: zhangxin
 * @Date: 2020-03-27 19:47:57
 * @LastEditTime: 2020-03-27 20:42:50
 * @LastEditors: zhangxin
 */
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { IndexPage  } from './index';

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      RouterModule.forChild([{ path: '', component: IndexPage }])
    ],
    declarations: [IndexPage]
  })
  export class IndexPageModule {}
  