import { Component, OnInit } from '@angular/core';

import { OrderList } from './orderList';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ApiGetDateService } from '../service/apiGetDate.service';
import { collectExternalReferences } from '@angular/compiler';

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
    //ステータス
    // let api1="http://127.0.0.1:3000/tscStatus";
    // this.http.get(api1).subscribe((response1:any)=>{
    this.apiGetDate.getAll("tscStatus").subscribe((response1:any)=>{
    this.tscStatusList=response1;
    },error => {
      if (error.status != 200){
        this.errorMsg.push("网络断开,ステータス取得失败");
      }
    })
    //ITEM(PO)
    // let api2="http://127.0.0.1:3000/productItem";
    // this.http.get(api2).subscribe((response2:any)=>{
    this.apiGetDate.getAll("productItem").subscribe((response2:any)=>{
    this.productItemList=response2;
  },error => {
    if (error.status != 200){
      this.errorMsg.push("网络断开,ITEM(PO)取得失败");
    }
  })
    //生地インポーター
    // let api3="http://127.0.0.1:3000/fablicImporter";
    // this.http.get(api3).subscribe((response3:any)=>{
    this.apiGetDate.getAll("fablicImporter").subscribe((response3:any)=>{
    this.fablicImporterList=response3;
    },error => {
      if (error.status != 200){
        this.errorMsg.push("网络断开,生地インポーター取得失败");
      }
    })
  }

  ngOnInit() {

    this.route.queryParams.subscribe((data)=>{
     
      this.orderList.orderId =data.orderId;
      this.orderList.productFabricNo =data.productFabricNo;

      // console.log(data.searchMesaiList);
      // this.orderList.orderId =data.searchMesaiList[0].orderId;
      // this.orderList.productFabricNo =data.searchMesaiList[0].productFabricNo;
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
      //手动设置请求的类型
      const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
      //存在跨域   
      // let api='http://127.0.0.1:3000/dologin';
      // this.http.post(api,{"orderList":this.orderList},httpOptions).subscribe((response:any)=>{
      this.apiGetDate.getPost("dologin","orderList",this.orderList).subscribe((response:any)=>{
      console.log(response.length);
      for (var i=0;i<response.length;i++) {
        this.orderMesai.push(response[i]);
      }
      console.log(this.orderMesai.length);
      },error => {
        if (error.status != 200){
          this.errorMsg.push("网络断开,请求失败");
        }
      })
    }
    
  }

  checkboxOnclick(){

  }

  /*
  tscStatusList =  [{    lable:'',   value:''
  },{    lable:'一時保存',   value:'T0'
  },{    lable:'取り置き',   value:'T1'
  },{    lable:'登録済',   value:'T2'
  },{    lable:'会計済',   value:'T3'
  },{    lable:'商品部承認済',   value:'T4'
  },{    lable:'生産開始',   value:'T5'  }];

  productItemList =  [{    lable:'',   value:''
  },{    lable:'SUIT(ALL)',   value:'01'
  },{    lable:'SUIT(2P)',   value:'21'
  },{    lable:'SUIT(3P2PP)',   value:'32'
  },{    lable:'JACKET',   value:'01'
  },{    lable:'PANTS',   value:'03'
  },{    lable:'SHIRT',   value:'05'  }];

  fablicImporterList =  [{    lable:'',   value:''
  },{    lable:'服良',   value:'01'
  },{    lable:'蝶理',   value:'02'
  },{    lable:'鷹岡',   value:'03'
  },{    lable:'DORMEUL',   value:'04'
  },{    lable:'御幸毛織',   value:'05'
  },{    lable:'マルキシ',   value:'06'  }];
*/

/*
//手动设置请求的类型
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    //存在跨域   
    let api='http://127.0.0.1:3000/dologin';
    this.http.post(api,{"orderList":this.orderList},httpOptions).subscribe((response:any)=>{
    this.orderList=response;
      this.orderList.orderId=response.orderId;
      this.orderList.tscStatus=response.tscStatus;
      this.orderList.productItem=response.productItem;
      this.orderList.productOrderdDateFrom=response.productOrderdDateFrom;
      this.orderList.productOrderdDateTo=response.productOrderdDateTo;
      this.orderList.custDeliverDateFrom=response.custDeliverDateFrom;
      this.orderList.custDeliverDateTo=response.custDeliverDateTo;
      this.orderList.isCancelled=response.isCancelled;
      this.orderList.isSendFailure=response.isSendFailure;
      this.orderList.custCd=response.custCd;
      this.orderList.storeStaffNm=response.storeStaffNm;
      this.orderList.productFabricNo=response.productFabricNo;
      this.orderList.fablicImporter=response.fablicImporter;
      this.orderList.custShopDeliveryDateFrom=response.custShopDeliveryDateFrom;
      this.orderList.custShopDeliveryDateTo=response.custShopDeliveryDateTo;
      this.orderList.updatedAtFrom=response.updatedAtFrom;
      this.orderList.updatedAtTo=response.updatedAtTo;
      this.orderList.isAccount=response.isAccount;
      this.orderList.isOtherShop=response.isOtherShop;

    })
*/
}
