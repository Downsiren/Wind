/*
 * @Description: config-comm.ts
 * @Author: zhangxin
 * @Date: 2020-04-10 12:12:41
 * @LastEditTime: 2020-04-17 00:07:47
 * @LastEditors: zhangxin
 */
import { Component,OnInit,OnChanges } from '@angular/core';
import { Router  } from '@angular/router';

//declare var $: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-config',
  templateUrl: 'config-comm.html',
})

export class ConfigPage implements OnInit{
  private device : any;//设备
  private baudrate : number;//波特率
  private parity : number;//校验位
  private dataBits : number;//数据位
  private stopBit: number;//停止位

  constructor(
      private router : Router, //注入路由
  ) {}

  ngOnInit(){
    console.log("已跳转configpage")
    this.setDefaultConfig();

  }

  ngOnChanges(){

  }

  /**
 * @description: 点击跳转到professional.html页面
 * @param : 
 * @return: 
 */    
  clickToProfessionalPage() : void{
    try {
        this.router.navigate(['/professional'],{replaceUrl: true});
        console.log("已跳转professional页面")
        window.location.replace('/professional') //页面同步刷新为professional.html
    } catch (error) {
        console.error("未跳转professional页面",error);
    }
  }

/**
 * @description: 跳转到首页
 * @param : 
 * @return: 
 */  
  clickToIndexPage(){
    try {
      this.router.navigate(['/index'],{replaceUrl: true});
      console.log("已跳转index页面")
      window.location.replace('/index') //页面同步刷新为index.html
    } catch (error) {
        console.error("未跳转index页面",error);
    }
  }

/**
 * @description: 保存配置
 * @param : 
 * @return: 
 */  
  saveConfig(){
    try {
      this.getValueFromBaudrate();
      this.getValueFromParity();
      this.getValueFromDataBits();
      this.getValueFromStopBits();
      console.log("配置已保存")
    } catch (error) {
      console.error("配置保存出错",error)
    }
  }

    /**
   * @description: 转换单选获取的值
   * @param : num 转换后的变量值，如bandrate str 从radio中获取的值
   * @return: 
   */
  changeAnyToNum(num : number , str : any){
    try {
      num = Number(str);
      console.log("转换成功" + num);
    } catch (error) {
      console.error("转换失败" + error);
    }
  }

/**
 * @description: 设置配置默认初始值
 * @param : 
 * @return: 
 */  
  setDefaultConfig(){
    try {
      this.baudrate = 9600;
      this.parity = 0;
      this.dataBits = 8;
      this.stopBit = 1;
      console.log("已启用默认配置")
    } catch (error) {
      console.error("默认配置启用失败",error)
    }
    
  }


/**
 * @description: 获取input radio波特率的值
 * @param : 
 * @return: 
 */ 
  getBaudRateFromInput(){
    try {
      let baudRateValue : any;
      baudRateValue = $("input[type='radio'][name='baudRate']:checked").val(); //通过input name获取
      console.log("用户选择波特率：" + baudRateValue);
      return baudRateValue;
    } catch (error) {
      console.error("获取用户选择波特率值失败" + error);
    }
  }


/**
 * @description: 获取转换Number类型后的波特率值
 * @param : 
 * @return: 
 */  
  getValueFromBaudrate(){
    try {
      var baud = this.getBaudRateFromInput();
      this.changeAnyToNum(this.baudrate,baud);
      console.log("波特率选择为：" + this.baudrate);
    } catch (error) {
      console.error("波特率未获取选择值" + error);
    }
  }

/**
 * @description: 获取radio中校验位值
 * @param : 
 * @return: 
 */  
  getParityFromInput(){
    try {
      let parityValue : any;
      parityValue = $("input[type='radio'][name='parity']:checked").val(); //通过input name获取
      console.log("用户选择校验位：" + parityValue);
      return parityValue;
    } catch (error) {
      console.error("获取用户选择校验位值失败" + error);
    }
  }

/**
 * @description: 获取转换Number类型后的校验位值
 * @param : 
 * @return: 
 */  
  getValueFromParity(){
    try {
      var par = this.getParityFromInput();
      this.changeAnyToNum(this.parity,par);
      console.log("校验位选择为：" + this.parity);
    } catch (error) {
      console.error("校验位未获取选择值" + error);
    }
  }

/**
 * @description: 获取radio中数据位值
 * @param : 
 * @return: 
 */  
  getDataBitsFromInput(){
    try {
      let dataBitsValue : any;
      dataBitsValue = $("input[type='radio'][name='dataBits']:checked").val(); //通过input name获取
      console.log("用户选择数据位：" + dataBitsValue);
      return dataBitsValue;
    } catch (error) {
      console.error("获取用户选择数据位值失败" + error);
    }
  }

/**
 * @description: 获取转换Number类型后的校验位值
 * @param : 
 * @return: 
 */  
  getValueFromDataBits(){
    try {
      var databit = this.getDataBitsFromInput();
      this.changeAnyToNum(this.dataBits,databit);
      console.log("数据位选择为：" + this.dataBits);
    } catch (error) {
      console.error("数据位未获取选择值" + error);
    }
  }

/**
 * @description: 获取radio中数据位值
 * @param : 
 * @return: 
 */  
  getStopBitsFromInput(){
    try {
      let stopBitsValue : any;
      stopBitsValue = $("input[type='radio'][name='stopBit']:checked").val(); //通过input name获取
      console.log("用户选择停止位：" + stopBitsValue);
      return stopBitsValue;
    } catch (error) {
      console.error("获取用户选择停止位值失败" + error);
    }
  }

/**
 * @description: 获取转换Number类型后的校验位值
 * @param : 
 * @return: 
 */  
  getValueFromStopBits(){
    try {
      var stopbit = this.getStopBitsFromInput();
      this.changeAnyToNum(this.stopBit,stopbit);
      console.log("停止位选择为：" + this.stopBit);
    } catch (error) {
      console.error("停止位未获取选择值" + error);
    }
  }
  

}