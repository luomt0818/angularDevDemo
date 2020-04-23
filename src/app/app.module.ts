import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orderList/orderList.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { OrderMesaiComponent } from './orderMesai/orderMesai.component';

import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
   declarations: [
      AppComponent,
      OrderListComponent,
      ErrorComponent,
      MenuComponent,
      OrderMesaiComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      FormsModule,
      CommonModule,
      HttpClientModule,
      HttpClientJsonpModule,
      BootstrapModalModule,
      ModalModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
