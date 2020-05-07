import { Component, OnInit } from '@angular/core';

import { OrderList } from './orderList';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ApiGetDateService } from '../service/apiGetDate.service';
// import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-orderList',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css']
})
export class OrderListComponent implements OnInit {

  orderList = new OrderList();
  orderMesai:any[] =[];
  tscStatusList:any[]=[];
  productItemList:any[]=[];
  fablicImporterList:any[]=[];
  errorMsg:string[] = [];
  errorMessage:string;
  data:any[] =[];

  constructor(public http:HttpClient,public route:ActivatedRoute,public apiGetDate:ApiGetDateService) { 
    //下拉列表初期化
    this.listInit();
  }

  listInit() {
    //下拉列表初期化
    //ステータス
    //1：直接使用请求方式
    // let api1="http://127.0.0.1:3000/tscStatus";
    // this.http.get(api1).subscribe((response1:any)=>{
    //2：统一封装请求方式1
    // this.apiGetDate.getAll("tscStatus").subscribe((response1:any)=>{
      //2：统一封装请求方式2
      this.apiGetDate.requestData({method:"get", url:"tscStatus",data:{"":""}}).subscribe((response1:any)=>{
      this.tscStatusList=response1;
      console.log("data:"+response1);
      },error => {
        this.errorMsg.push(this.handleError(error));
        return;
      });
      //ITEM(PO)
      //1：直接使用请求方式
      // let api2="http://127.0.0.1:3000/productItem";
      // this.http.get(api2).subscribe((response2:any)=>{
      //2：统一封装请求方式1
      // this.apiGetDate.getAll("productItem").subscribe((response2:any)=>{
      //2：统一封装请求方式2
      this.apiGetDate.requestData({method:"get", url:"productItem",data:{"":""}}).subscribe((response2:any)=>{
      this.productItemList=response2;
    },error => {
      this.errorMsg.push(this.handleError(error));
    });
      //生地インポーター
      //1：直接使用请求方式
      // let api3="http://127.0.0.1:3000/fablicImporter";
      // this.http.get(api3).subscribe((response3:any)=>{
      //2：统一封装请求方式1
      // this.apiGetDate.getAll("fablicImporter").subscribe((response3:any)=>{
      //2：统一封装请求方式2
      this.apiGetDate.requestData({method:"get", url:"fablicImporter",data:{"":""}}).subscribe((response3:any)=>{
      this.fablicImporterList=response3;
      },error => {
        this.errorMsg.push(this.handleError(error));
      });
  }

  ngOnInit() {

    this.route.queryParams.subscribe((data)=>{
    this.orderList.orderId =data.orderId;
    this.orderList.productFabricNo =data.productFabricNo;
    });
   }

  //清空
  reset(){
    this.orderList = new OrderList();
    this.errorMsg.splice(0,this.errorMsg.length);
    this.orderMesai.splice(0,this.orderMesai.length);
  }

  //检索
  searchOrder(){

    this.errorMsg.splice(0,this.errorMsg.length);
    this.orderMesai.splice(0,this.orderMesai.length);

    //项目check
    if (this.orderList.orderId == null || this.orderList.orderId == "") {
      this.errorMsg.push("orderId不能为空.");
      console.log(this.errorMsg);
    } 
    if (this.orderList.productFabricNo==null || this.orderList.productFabricNo=="") {
      this.errorMsg.push("生地品番不能为空.");
      console.log(this.errorMsg);
    }

    //error为空时，API发送
    if (this.errorMsg[0] == null) {
      //1：直接使用请求方式
      //手动设置请求的类型
      const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

      //2：统一封装请求方式1
      // this.apiGetDate.getPost("dologin","orderList",this.orderList).subscribe((response:any)=>{
      //2：统一封装请求方式2
      this.apiGetDate.requestData({method:"post", url:"dologin",data:{"orderList":this.orderList}}).subscribe((response:any)=>{
      console.log(response.length);
      for (var i=0;i<response.length;i++) {
        this.orderMesai.push(response[i]);
      }
      console.log(this.orderMesai.length);
      },error => {
        this.errorMsg.push(this.handleError(error));
      })
    }
    
  }

  checkboxOnclick(){

  }

  //error处理
  handleError(errorData:any, handleAlert = alert) {
    const { ok, error, status, statusText } = errorData;
    console.log(status+":"+statusText+":"+error+":"+ok);
    let { message = null } = error || {};

    if (ok) {
      return;
    }

    switch (status) {
      case 503:
        message = '服务器错误[503]';
        break;
      case 502:
        message = '服务器错误[502]';
        break;
      case 501:
        message = '服务器错误[501]';
        break;
      case 500:
        message = '服务器错误[500]';
        break;
      case 400:
        message = `请求参数错误[400]!(${message || statusText})`;
        break;
      case 401:
        message = `非法用户登录[401]!(${message || statusText})`;
        break;
      case 403:
        message = `没有访问权限[403]!(${message || statusText})`;
        break;
      case 404:
        message = `请求资源不存在[404]!(${message || statusText})`;
        break;
      case 415:
        message = `请求方式错误[415]!(${message || statusText})`;
        break;
      default:
        message = `未知错误[${status}]!(${message || statusText})`;
    }
    // 弹框表示
    // handleAlert.call(null, message);
    return message;
  }

}
