/*
 * @Description: cover.module.ts
 * @Author: zhangxin
 * @Date: 2020-03-27 18:35:21
 * @LastEditTime: 2020-03-27 18:38:46
 * @LastEditors: zhangxin
 */
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverStart } from './cover';

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      RouterModule.forChild([{ path: '', component: CoverStart }]),
    ],
    declarations: [CoverStart]
  })
  export class CoverStartModule {}