/*
 * @Descripttion: SQLite数据库管理服务
 * @version: 
 * @Author: zhang xin
 * @Date: 2020-03-30 22:37:01
 * @LastEditors: zhangxin
 * @LastEditTime: 2020-04-02 17:51:55
 */
import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject , SQLiteTransaction } from '@ionic-native/sqlite/ngx';
import { resolve } from 'url';

//import { exec } from 'child_process';

@Injectable({
  providedIn: 'root'
})

export class DbmanageService {

 // private dataBase : SQLiteObject;
  private win : any = window;
  private data : any = [];
  //private dataBase :SQLiteObject;
  private db : any;

  constructor(
    private sqlite: SQLite
  ) {
      
   }


   
/**
 * @Description: 从数据库中查数据
 * @name: zhang xin
 * @msg: 
 * @param 
 * @return:output_data 查询到的数据对象数组 
 */  
  getDataFromTestDb(){
    let output_data =[];
    try {
      this.initDatabase();
      this.createTableToTestDb();
      this.insertDataToDb();
      output_data =  this.queryDataFromTable();
      console.log("get data successfully")
      return output_data;
    } catch (error) {
      console.error("get data失败",error.message)
    }
  }


/**
 * @Description: 打开数据库
 * @name: zhang xin
 * @msg: 
 * @param {type} 
 * @return: 
 */   
   initDatabase(){
     try {
        if (this.win.sqlitePlugin) {
          //真机环境
          this.openAndroidDb();
        }else{
          //浏览器环境
          this.openBrowserDb();
        }
     } catch (error) {
       console.error("初始化失败",error.message)
     }
    
   }


/**
 * @Description: 初始化数据库操作，打开安卓环境的数据库
 * @name: zhang xin
 * @msg: appdata.db 测试数据库
 * @param { SQLiteObject }  db 数据库对象
 * @return: 
 */    
  openAndroidDb(){
    try {
        this.db = this.sqlite.create({
        name: 'appdata.db',
        location: 'default'
      }).then((database) =>{
        this.db = database;
        //return this.db;
        this.createTableToTestDb();
        this.insertDataToDb();
        
      })
      ;
      console.log(" 安卓数据库打开成功！ ",this.db)
      alert("数据库打开成功")
    } catch (error) {
      console.log("安卓数据库打开失败" + error.message);
      alert("数据库打开失败")
    }
    
   
  }

/**
 * @Description: 浏览器打开数据库
 * @name: zhang xin
 * @msg: appdata.db 测试数据库
 * @param { SQLiteObject } db 数据库对象
 * @return: 
 */  
  openBrowserDb(){
    //window.openDatabase("数据库名字", "版本","数据库描述",数据库大小);
    try {
      this.db = this.win.openDatabase("appdata.db",'1.0', 'database', 5 * 1024 * 1024);
      console.log(" 浏览器数据库打开成功 ",this.db)
    } catch (error) {
      console.error(" 浏览器数据库打开失败 " + error.message);
    }
    
  }

 /**
  * @Description: 执行SQL语句
  * @name: zhang xin
  * @param { String } sql sql语句
  * @param { SQLiteObject } db 数据库对象
  * @param {*} params=[] sql参数值，可选参数，只有sql语句中用到select方式时，params参数值才有效
  * @return:{Promise<any>} 返回一个承诺,通过 .then(result=>{}).catch(err=>{})来处理结果
  */
    execSql(sql: string,params = []): Promise<any> {
      return new Promise((resolve, reject) => {
          try {
              this.db.transaction((tx) => {
                      tx.executeSql(sql, params,
                          (tx, res) => resolve({ tx: tx, res: res }),
                          (tx, err) => reject({ tx: tx, err: err }));
                  },
                  (err) => reject({ err: err }));
          } catch (error) {
              reject({ err: error });
          }
      });
  } 


/**
 * @Description: 在数据库中创建表
 * @name: zhang xin
 * @msg: 测试数据库
 * @param { SQLiteObject } db  数据库对象
 * @return: 
 */  
  createTableToTestDb(){
    let sql = "CREATE TABLE IF NOT EXISTS show (id INT PRIMARY KEY UNIQUE NOT NULL, cu_speed REAL, max_speed REAL, wind_force INT, cu_direction REAL, wind_type VARCHAR (50), addtime DATETIME COLLATE BINARY)";
    try {
      this.execSql(sql,[]).then(() =>{
        console.log(  '创表成功');
        alert("创表成功")
    }).catch(err => {
        console.error("创表出错了", err.error.message);
    });
   } catch (error) {
      console.error(" 创表失败 ", error.message);
      alert("创表失败")
    }
  }


  /**
   * @Description: 从数据库中查出 添加时间降序排列的 第一行数据
   * @name: zhang xin
   * @msg: 
   * @param {type} 
   * @return: 
   */
  queryDataFromTable(){
    let output =[];
    let sql ="select * from show order by addtime desc LIMIT 1";
    //let sql ="select * from show order by id desc LIMIT 1";
    try {
      this.execSql(sql,[]).then((data)=> {
          //output = this.assignValueToData(res);
          for (let i = 0; i < data.res.rows.length; i++) {
            output.push(data.res.rows.item(i));
            console.log("成功" ,output );
            
        }
          alert("查询成功")
          console.log("查询成功" ,output );
      })
    return output;
    } catch (error) {
      console.error("查询失败,无返回值",error.message)
      alert("查询出错了")
    }
  }


/**
 * @Description: 向表中插入数据
 * @name: zhang xin
 * @msg: 
 * @param { SQLiteObject } db 数据库对象
 * @return: 
 */  
  insertDataToDb(){
    let sql = " INSERT INTO show (id, cu_speed, max_speed, wind_force, cu_direction, wind_type, addtime) VALUES (3, 111, 123, 7, 190.0, '东南风', '2020-03-31 17:22:00')";
        this.execSql(sql).then(() => {
            console.log(  '插入成功');
            alert("插入成功")
        }).catch(err => {
            console.error("插入出错了",err.message);
            alert("插入出错了")
        });
  }

}
