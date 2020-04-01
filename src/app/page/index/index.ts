/*
 * @Description: index.ts
 * @Author: zhangxin
 * @Date: 2020-03-27 19:46:43
 * @LastEditTime: 2020-03-31 17:59:18
 * @LastEditors: zhang xin
 */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

//import{ Injectable }from'@angular/core';
import { DbmanageService } from '../../services/DbService/dbmanage.service';
//import { TestService } from '../../service/sqlservice/test.service';

@Component({
    selector:"app-index",
    templateUrl:"./index.html",
})

//@Injectable()
export class IndexPage implements OnInit{

     datas : any = []

    constructor(
        private dbmanageService : DbmanageService,
       // private testService : TestService,
        private ref :ChangeDetectorRef,
    ) {}
    
    ngOnInit(): void {
        console.log('跳转成功');
        console.log(this);
        this.datas = this.dbmanageService.getDataFromTestDb();
       // this.testCreate();
        //this.testInsert();
        //this.datas = this.testQuery();
        //this.testService.textone();
        //this.datas = this.testService.textCreate();
        //this.datas = this.dbmanageService.initDB();
        console.log("open");
        this.ref.detectChanges();
       //this.datas = this.dbmanageService.queryData();
       console.log("datas",this.datas);
    }


   /* testCreate(){
        //let sql = "CREATE TABLE IF NOT EXISTS DemoTable (name, score)"
        let sql = "CREATE TABLE IF NOT EXISTS show (id INT PRIMARY KEY UNIQUE NOT NULL, cu_speed REAL, max_speed REAL, wind_force INT, cu_direction REAL, wind_type VARCHAR (50), time DATETIME COLLATE BINARY)"
        this.testService.execSql(sql).then(() => {
            console.info(  '创建成功');
        }).catch(err => {
            console.error("出错了", err.error.message);
        });
    }
    
    testInsert(){
        let sql = " INSERT INTO show (id, cu_speed, max_speed, wind_force, cu_direction, wind_type, time) VALUES (2435, 52.2, 73.2, 7, 180.0, '东南风', '2020-03-27 14:18:00')"
        this.testService.execSql(sql).then(() => {
            console.info(  '插入成功');
        }).catch(err => {
            console.error("出错了",err.message);
        });
    }

    testQuery(){
        let output = [];
       // let sql = "select * from DemoTable order by score desc LIMIT 1";
       let sql = "select * from show order by time desc LIMIT 1";
               this.testService.execSql(sql, []).then((data) => {
                   for (let i = 0; i < data.res.rows.length; i++) {
                       output.push(data.res.rows.item(i));
                   }
                    console.log(output );
               }).catch((err) => {
                   console.error(err);
               });
        return output;
    }*/


    
}