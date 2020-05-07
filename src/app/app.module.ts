import { BrowserModule } from '@angular/platform-browser';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orderList/orderList.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { OrderMesaiComponent } from './orderMesai/orderMesai.component';
import { TestComponent } from './test/test.component';
import { ItemStatusPipe } from './pipe/itemStatus.pipe';
import { OthersComponent } from './others/others.component';


@NgModule({
   declarations: [
      AppComponent,
      OrderListComponent,
      ErrorComponent,
      MenuComponent,
      OrderMesaiComponent,
      TestComponent,
      ItemStatusPipe,
      OthersComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      FormsModule,
      CommonModule,
      HttpClientModule,
      HttpClientJsonpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
