import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OrderList } from '../orderList/orderList';

@Injectable({
  providedIn: 'root'
})
export class ApiGetDateService {

  data:any[] =[];
  apiBase:String ="http://127.0.0.1:3000/";

constructor(public http:HttpClient,public route:ActivatedRoute) { }

getAll(strApi:string) {

  let apiUrl=this.apiBase+ strApi;
  return this.http.get(apiUrl);
}

getPost(strApi:string,paraType:string,orderList:OrderList){
  //手动设置请求的类型
  const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  //存在跨域   
  let apiUrl=this.apiBase+ strApi;
  return this.http.post(apiUrl,{paraType:orderList},httpOptions);
}






}
