/*
 * @Description: index.ts
 * @Author: zhangxin
 * @Date: 2020-03-27 19:46:43
 * @LastEditTime: 2020-04-12 16:27:16
 * @LastEditors: zhangxin
 */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router  } from '@angular/router';

import { DbmanageService } from '../../services/DbService/dbmanage.service';
import {  WifimanageService } from '../../services/WifiService/wifimanage.service';
import {  SocketService } from '../../services/SocketService/socket.service';


@Component({
    selector:"app-index",
    templateUrl:"./index.html",
})

//@Injectable()
export class IndexPage implements OnInit{

     datas : any = []

    constructor(
        private dbmanageService : DbmanageService,
        private wifimanage : WifimanageService,
        private socketmanage : SocketService,
        private router : Router,
        private ref :ChangeDetectorRef,
    ) {}
    
    ngOnInit(): void {
        console.log('跳转成功');
        console.log(this);
        this.datas = this.dbmanageService.getDataFromTestDb();
        //this.wifimanage.wifiConnection();
        this.socketmanage.socketGetData();
        this.socketmanage.socketConnect();
       //this.socketmanage.checkSocket();
        
        console.log("index open");
        this.ref.detectChanges();
       //this.datas = this.dbmanageService.queryData();
       console.log("datas",this.datas);
    }


    /**
     * @description: 点击跳转到config-comm.html页面
     * @param : 
     * @return: 
     */
    clickToConfigPage() : void{
        try {
            this.router.navigate(['/config'],{replaceUrl: true});
            console.log("已跳转config页面")
            window.location.replace('/config') //页面同步刷新为config-comm.html
        } catch (error) {
            console.error("未跳转config页面",error);
        }
         
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

    
}