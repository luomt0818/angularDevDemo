import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';

import { ApiGetDateService } from '../service/apiGetDate.service';

@Component({
  selector: 'app-orderMesai',
  templateUrl: './orderMesai.component.html',
  styleUrls: ['./orderMesai.component.css']
})
export class OrderMesaiComponent implements OnInit {

  searchMesaiList:any[] = [];

  constructor(public http:HttpClient,public router:Router,public apiGetDate:ApiGetDateService) { 

    //2：统一封装请求方式1
    // this.apiGetDate.getAll("search").subscribe((response:any)=>{
    //2：统一封装请求方式2
    this.apiGetDate.requestData({method:"get", url:"search",data:{"":""}}).subscribe((response:any)=>{
    this.searchMesaiList.push(response);
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/orderList']);
  }

  update() {
 //跳转并进行get传值
 let queryParams={
    queryParams:{'orderId':this.searchMesaiList[0].orderId,'productFabricNo':this.searchMesaiList[0].productFabricNo}
  }
  this.router.navigate(['/orderList'],queryParams);
  // this.router.navigate(['/orderList','1243'])
}
}
