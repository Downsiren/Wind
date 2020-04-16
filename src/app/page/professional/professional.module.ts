/*
 * @Description: professional.module.ts
 * @Author: zhangxin
 * @Date: 2020-04-10 12:20:52
 * @LastEditTime: 2020-04-10 12:22:38
 * @LastEditors: zhangxin
 */
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { ProfessionalPage  } from './professional';

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      RouterModule.forChild([{ path: '', component: ProfessionalPage }])
    ],
    declarations: [ProfessionalPage]
  })
  export class ProfessionalPageModule {}
  
