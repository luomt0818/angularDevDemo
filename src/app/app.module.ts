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

@NgModule({
   declarations: [
      AppComponent,
      OrderListComponent,
      ErrorComponent,
      MenuComponent
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
   ]
})
export class AppModule { }
