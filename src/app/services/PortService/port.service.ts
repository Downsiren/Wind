/*
 * @Description: 串口js接口
 * @Author: zhangxin
 * @Date: 2020-04-03 14:32:35
 * @LastEditTime: 2020-04-16 23:44:27
 * @LastEditors: zhangxin
 */
import { Injectable } from '@angular/core';

//调用自定义插件SerialPortRW
declare let SerialPortRW: any;


@Injectable({
  providedIn: 'root'
})
export class PortService {
  private device : any; //串口设备名
  private baudRate : any; //波特率
	private parity : any; //校验位
	private dataBits : any; //数据位
	private stopBit : any; //停止位

  constructor() { }


/**
 * @description: 获取串口设备列表
 * @param : data 返回的是个串口的device数组
 * @return: 
 */  
  getSerialPort(){
    SerialPortRW.getSerialPort(function success(data){

    }, function error(){

    });
  }
  
/**
 * @description: 打开串口
 * @param : device 是 getSerialPort 中返回的device
 *          baudRate 串口设备波特率 2400/9600
 *          parity 校验位 
 *          dataBits 数据位 8
 *          stopBit 停止位
 * @return: 
 */
  openSerialPort(device, baudRate, parity, dataBits, stopBit){
    SerialPortRW.openSerialPort(device, baudRate, parity, dataBits, stopBit, function success(data){
      console.log("串口打开成功")
    } , function error (){
      console.error("串口打开失败",error)
    });
  }

/**
 * @description: 检测串口是否可用
 * @param : success 检测串口成功的回调函数，回调参数data = 1 ，则可用，为 data ！= 1 则不可用
 * @return: 
 */
  portDetect(){
    SerialPortRW.portDetect(function success(data){
      if(data == 1){
        console.log("串口可用")
      }else{
        console.log("串口不可用")
      }
    },function error (){
      
    })
  }

/**
 * @description: 从串口中接收数据
 * @param : `receiveCallback` 接收串口数据的函数，参数 `data` 是 ArrayBuffer，需要转成js对应的数组
 * @return: 
 */
  getDataFromSerialPort(){
    SerialPortRW.startNotify(receiveCallback,function error (){
      
    })
    {
        
    }
    var receiveCallback = function(data){
      // Decode the ArrayBuffer into a typed Array based on the data you expect
      var unit8 = new Uint8Array(data);
    }
  }


/**
 * @description: 关闭串口
 *              最好只有在程序退出时候关闭串口
 * @param : 
 * @return: 
 */  
  closeSerialPort(){
    SerialPortRW.closeSerialPort(function success(){
      console.log("串口关闭成功")
    }, function error(){
      console.error("串口关闭失败",error)
    });
  }
  
}
