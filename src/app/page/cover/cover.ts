/*
 * @Description: cover.ts
 * @Author: zhangxin
 * @Date: 2020-03-27 18:12:35
 * @LastEditTime: 2020-04-10 16:53:43
 * @LastEditors: zhangxin
 */
import { Component,OnInit,OnChanges } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: 'cover.html',
})

export class CoverStart implements OnInit{

  private num : number;//加载时显示的数值
  private state : boolean = false;//加载状态

  constructor(
      private router : Router, //注入路由
  ) {
    
  }

  ngOnInit(){

    this.NavToIndex();
  }
  
  /**
   * @description: 设置3秒后跳转首页
   * @param : 
   * @return: 
   */
  NavToIndex(){
    try {
      setTimeout(() => {
      
      this.router.navigate(['/index'],{replaceUrl: true})
      this.state = true; //将加载状态设置为完成
      console.log("已跳转index");
      window.location.replace('/index') //页面同步刷新为index.html
    
    }, 3000);
    } catch (error) {
      console.error("跳转失败",error.message)
    }
    
  }

/**
 * @description: 设置加载数字百分比
 * @param : 
 * @return: 
 */  
  loadingTime(){
    this.num = 28;
    if(!this.state){
      this.num ++;
    }else{
      this.num = 100;
    }
    
  }

}
