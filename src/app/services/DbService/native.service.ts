/*
 * @Descripttion: 是否真机环境
 * @version: 
 * @Author: zhang xin
 * @Date: 2020-03-30 22:52:34
 * @LastEditors: zhang xin
 * @LastEditTime: 2020-03-30 22:53:30
 */
import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  constructor(
    public platform : Platform
  ) { }

  /**
 * @description: 判断是否真机环境
 * @return:  boolean
  */  
  isMobile():boolean
  {
    return this.platform.is("mobile")
  }


/**
 * @description: 判断是否安卓环境
 * @return: boolean 
 */
  isAndroid():boolean
  {
    return this.isMobile() && this.platform.is("android");
  }
  
}
