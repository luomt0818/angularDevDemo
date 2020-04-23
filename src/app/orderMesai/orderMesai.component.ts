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

  }

  update() {
 //跳转并进行get传值
 let queryParams={
    queryParams:{'aid':123}
  }
  this.router.navigate(['/orderList'],queryParams);
}

  delete() {

  }
}
