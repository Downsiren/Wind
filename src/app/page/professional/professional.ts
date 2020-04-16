/*
 * @Description: professional.ts
 * @Author: zhangxin
 * @Date: 2020-04-10 12:20:12
 * @LastEditTime: 2020-04-12 16:27:49
 * @LastEditors: zhangxin
 */
import { Component,OnInit,OnChanges,ChangeDetectorRef } from '@angular/core';
import { Router  } from '@angular/router';

import { DbmanageService } from '../../services/DbService/dbmanage.service';

@Component({
  selector: 'app-professional',
  templateUrl: 'professional.html',
})

export class ProfessionalPage implements OnInit{

    datas : any = []


  constructor(
      private router : Router, //注入路由
      private dbmanageService : DbmanageService,
      private ref :ChangeDetectorRef,
  ) {}

  ngOnInit(){
    console.log("已跳转professional")
    this.datas = this.dbmanageService.getDataFromTestDb();
    this.ref.detectChanges();
    console.log("datas",this.datas);

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
  

}