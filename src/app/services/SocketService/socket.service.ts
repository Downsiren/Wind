/*
 * @Description: 实现使用socket接收数据
 * @Author: zhangxin
 * @Date: 2020-04-08 20:42:23
 * @LastEditTime: 2020-04-08 23:26:35
 * @LastEditors: zhangxin
 */
import { Injectable } from '@angular/core';
import {  WifimanageService } from '../../services/WifiService/wifimanage.service';

//引入socket组件
declare var Socket: any;
//var socket = new Socket();

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private Ip : String;//ip地址 
  private post : number;//端口号
  datalist : any = [];

  private socket;

  constructor(
    private wifimanage : WifimanageService,
  ) { 
    this.socket = new Socket();
    //this.setIP("192.168.232.2");
   // this.setPost(1234);
  }

/**
 * @description: 设置ip 192.168.1.198
 * @param : { String } IP 通讯的ip地址  
 * @return: 
 */  
  setIP(IP : String ){
    try {
      this.Ip = IP;
      //this.ip =  this.wifimanage.getWifiIpAddress();
      console.log("ip已获取",this.Ip)
    } catch (error) {
      console.log("ip未获取",error.errorMessage)
    }
  }

  /**
   * @description: 设置端口号
   * @param : { number }POST 端口号 9010
   * @return: 
   */
  setPost(POST : number){
    try {
      this.post = POST;
      console.log("端口号已设置",this.post)
    } catch (error) {
      console.log("端口号未设置", error.errorMessage)
    }
  }

/**
 * @description: 连接socket
 * @param : 
 * @return: 
 */  

  socketConnect(){
   // socket.open(this.ip, this.post,  function() {
    this.socket.open("someremoteserver.com", 1234,  function() {
      //socket.open("192.168.232.2", 9010,  function() {
      // invoked after successful opening of socket
      console.log("Socket is opened");
      alert("socket已打开")
    
      },
      function(errorMessage) {
    
      // invoked after unsuccessful opening of socket
      console.log("Socket open failed", this.ip, this.port, errorMessage);
      alert("socket打开失败")
    
      })
  }

/**
 * @description: 接收数据 客户端接收新一批数据后调用，数据的表示形式为字节数组(Uint8Array )
 * @param : 接收到的data数据为 Unit8Array数组
 * @return: 
 */  
  socketGetData(){
    try {
      this.socket.onData = function(data) {
      //socket.onData = function(data) {
      // invoked after new batch of data is received (typed array of bytes Uint8Array)
       console.log("socket data",data);
       try {
         for(let i = 0;i < data.length; i++ ){
         this.datalist.push(String.fromCharCode(data[i]));
       }
       console.log("datalist获取成功",this.datalist)
       } catch (error) {
         console.log("socket data 未获取",error.errorMessage)
       }
      };
      console.log("socket已接收数据")
    } catch (error) {
      console.log("socket未接收数据",error.errorMessage)
    }
  }
  
/**
 * @description: 检查socket是否开启
 * @param : 
 * @return: 
 */  
checkSocket(){
  if (this.socket.state == Socket.State.OPENED) {
    console.log("Socket is opened");
   }else if(this.socket.state == Socket.State.CLOSED){
     console.log("Socket 未打开")
     this.socketConnect();
   }
   
}


/**
 * @description: 发生错误时关闭Socket
 * @param : socket.close();可直接关闭
 * @return: 
 */
  closeSocket(){
    //this.socket.onClose = function(hasError) {
      this.socket.onClose = function(hasError) {
      // invoked after connection close
      if(hasError){
        console.log("socket发生错误关闭")
      }else{
        console.log("socket关闭")
      }
     };
  }
  


}
