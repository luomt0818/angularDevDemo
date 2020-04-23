import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './orderList/orderList.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'orderList',component:OrderListComponent
  },
  {
    path:'error',component:ErrorComponent
  },
  {
    path:'**',redirectTo:'orderList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
