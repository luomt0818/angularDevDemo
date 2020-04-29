import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import {Http,Response}   from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OrderList } from '../orderList/orderList';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ApiGetDateService {

  data:any[] =[];
  apiBase:String ="http://127.0.0.1:3000/";


// constructor(public http:Http,public route:ActivatedRoute) { }

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
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    let apiUrl=this.apiBase+ params['url'];
    // POST请求（参数、返回值类型都是任意类型）
    if (params['method'] == 'post' || params['method'] == 'POST') {
      // return this.post(params['url'],params['data']);
      return this.http.post(apiUrl,params['data'],httpOptions);
    } else { // 其他请求
      // return this.get(params['url'],params['data']);
      return this.http.get(apiUrl,params['data']);
    }
  }


//  /**
//    * 统一发送请求
//    * @param params
//    * @returns {Promise<{success: boolean,msg: string}>|Promise<R>}
//    */
//   public request(params: any): any {
//     let apiUrl=this.apiBase+ params['url'];
//     // POST请求（参数、返回值类型都是任意类型）
//     if (params['method'] == 'post' || params['method'] == 'POST') {
//       // return this.post(params['url'],params['data']);
//       return this.post(apiUrl,params['data']);
//     } else { // 其他请求
//       // return this.get(params['url'],params['data']);
//       return this.get(apiUrl,params['data']);
//     }
//   }
 
//   /**
//    * get请求
//    * @param url 接口地址
//    * @param params 参数
//    * @returns {Promise<R>|Promise<U>}
//    */
//   public get(url: string,params: any): any {
//     return this.http.get(url,{search: params})
//       .toPromise()
//       .then(this.handleSuccess)
//       .catch(res => this.handleError(res));
//   }
 
//   /**
//    * post请求
//    * @param url 接口地址
//    * @param params 参数
//    * @returns {Promise<R>|Promise<U>}
//    */
//   public post(url: string,params: any) {
//     return this.http.post(url,params)
//       .toPromise()
//       .then(this.handleSuccess)
//       .catch(res => this.handleError(res));
//   }
 
//   /**
//    * 处理请求成功
//    * @param res
//    * @returns {{data: (string|null|((node:any)=>any)
//  */
//   private handleSuccess(res: Response) {
//     let body = res["_body"];
//     // console.log("接口返回的成功信息：" + body)
//     if (body) { // 有数据返回
//       return {
//         data: res.json().data || {},// 返回内容
//         code: res.json().code || {},// 返回code
//         message: res.json().message || {},// 返回信息
//         statusText: res.statusText,status: res.status,success: true
//       }
//     } else { // 无数据返回
//       return {
//         data: res.json().data || {},success: true
//       }
//     }
//   }
 
//   /**
//    * 处理请求错误
//    * @param error
//    * @returns {void|Promise<string>|Promise<T>|any}
//    */
//   private handleError(error) {
//     console.log(error);
//     let msg = '请求失败';
//     if (error.status == 400) {
//       console.log('请求参数正确');
//     }
//     if (error.status == 404) {
//       console.error('请检查路径是否正确');
//     }
//     if (error.status == 500) {
//       console.error('请求的服务器错误');
//     }
//     console.log(error);
//     return {success: false,msg: msg};
//   }
}
