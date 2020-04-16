/*
 * @Description: wifi管理
 * @Author: zhangxin
 * @Date: 2020-04-06 22:18:43
 * @LastEditTime: 2020-04-10 16:00:56
 * @LastEditors: zhangxin
 */
import { Injectable } from '@angular/core';

//引入wifi管理组件
declare var WifiWizard2: any;

@Injectable({
  providedIn: 'root'
})

export class WifimanageService {

  private ssid : String; //wifi名称
  private password : String; //密码
  private algorithm :String; //wifi加密方式
  private IP : any;//IP地址

  constructor() { 
    this.setSSID("1205");
    this.setPassword("zf203203");
    this.setAlgorithm("WPA");
    //主动申请权限
    WifiWizard2.requestPermission();
  }


/**
 * @description: 连接wifi
 * @param : WifiWizard2.connect(ssid, bindAll, password, algorithm, isHiddenSSID)
 *          如果是开放网络则不需要password和algorithm
 *          bindAll 一版填true
 *          isHiddenSSID为true要连接的网络是否隐藏
 * @return: 
 */  
  wifiConnection(){
    try {
      //如果没打开wifi，先打开wifi
      if(this.OpenWifi()){
        //如果wifi已打开
        WifiWizard2.connect(this.ssid, true, this.password, this.algorithm, true);
        console.log("wifi已连接")
        alert("wifi已连接")
      }
    } catch (error) {
      console.log("wifi连接失败",error.message)
      alert("wifi未连接")
    }

  }

/**
 * @description: 设置指定wifi名
 * @param : 
 * @return: 
 */  
  setSSID(SSID : String ){
    this.ssid = SSID;
    return this.ssid;
  }
  
/**
 * @description: 设置wifi密码
 * @param : 
 * @return: 
 */  
  setPassword(PWD: String ){
    this.password = PWD;
    return this.password;
  }

/**
 * @description: 设置加密方式
 * @param : WPA/WPA2 ———WPA; WPE
 * @return: 
 */  
  setAlgorithm(ALG :String ){
    this.algorithm = ALG;
    return this.algorithm;
  }

/**
 * @description: 获取wifi IP地址，以开启线程
 * @param : 
 * @return: 
 */
  getWifiIpAddress(){
    try {
      let that = this;
      console.log("this",this);
      WifiWizard2.getWifiIP().then(res => {
        console.log(res);
        console.log("this", this);
        var ip = res;
        console.log("ip", ip);
        that.IP = ip;
        console.log("that.ip",that.IP);
        //return that.IP;
      });
      console.log("WIFI ip已获取");
    // return that.IP;
      //return this.IP;
    } catch (error) {
      console.log("wifi IP 获取失败", error.message)
      alert("wifi IP 获取失败")
    }
  }

/**
 * @description: 判断是否开启wifi,如果wifi没开启，则打开wifi
 * @param : 
 * @return: wifiOpened 布尔值 是否开启wifi
 */
  OpenWifi(){
    let wifiOpened : boolean;
    try {
      wifiOpened = WifiWizard2.isWifiEnabled();
      if(!wifiOpened){
        console.log("正在重新打开wifi");
        WifiWizard2.setWifiEnabled(true);
      }else{
        console.log("wifi已开启");
        alert("wifi已开启");
      }
      return true;
    } catch (error) {
      console.log("wifi开启失败", error.message);
      alert("wifi未开启");
    }
  }
  
}
