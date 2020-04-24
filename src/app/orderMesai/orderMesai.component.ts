import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-orderMesai',
  templateUrl: './orderMesai.component.html',
  styleUrls: ['./orderMesai.component.css']
})
export class OrderMesaiComponent implements OnInit {

  searchMesaiList:any[] = [];

  constructor(public http:HttpClient,public router:Router) { 
    let api2="http://127.0.0.1:3000/search";
    this.http.get(api2).subscribe((response:any)=>{
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
    // queryParams:{'searchMesaiList':this.searchMesaiList[0]}
  }
  this.router.navigate(['/orderList'],queryParams);
  // this.router.navigate(['/orderList','1243'])
}
}
