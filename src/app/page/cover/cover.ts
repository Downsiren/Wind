/*
 * @Description: cover.ts
 * @Author: zhangxin
 * @Date: 2020-03-27 18:12:35
 * @LastEditTime: 2020-03-31 15:35:54
 * @LastEditors: zhang xin
 */
import { Component,OnInit,OnChanges } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: 'cover.html',
})

export class CoverStart implements OnInit{

  constructor(
      private router : Router, //注入路由
  ) {}

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
      console.log("已跳转");
      window.location.replace('/index') //页面同步刷新为index.html
    
    }, 3000);
    } catch (error) {
      console.error("跳转失败",error.message)
    }
    
  }

}
