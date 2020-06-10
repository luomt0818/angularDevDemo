import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiGetDateService {

  data:any[] =[];
  apiBase:String ="http://127.0.0.1:3000/";

constructor(public http:HttpClient,public route:ActivatedRoute) { }

//2：统一封装请求方式1
// getAll(strApi:string) {
//   let apiUrl=this.apiBase+ strApi;
//   return this.http.get(apiUrl);
// }
// getPost(strApi:string,paraType:string,orderList:OrderList){
//   //手动设置请求的类型
//   const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
//   //存在跨域   
//   let apiUrl=this.apiBase+ strApi;
//   return this.http.post(apiUrl,{paraType:orderList},httpOptions);
// }

//2：统一封装请求方式2
 /**
   * 统一发送请求
   * @param params
   * @returns 
   */
  public requestData(params: any): any {
    //手动设置请求的类型
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })};

    let apiUrl=this.apiBase+ params['url'];
    // POST请求（参数、返回值类型都是任意类型）
    if (params['method'] == 'post' || params['method'] == 'POST') {
      // return this.post(params['url'],params['data']);
      return this.http.post(apiUrl,params['data'],httpOptions);
    }else if (params['method'] == 'get' || params['method'] == 'GET') {
      return this.http.get(apiUrl,params['data']);
    } else { // 其他请求
      //get
      // return this.http.get(params['url'],params['data']);
      //post
      return this.http.post(params['url'],params['data'],httpOptions);
      
    }
  }
}
