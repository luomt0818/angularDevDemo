import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './orderList/orderList.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { OrderMesaiComponent } from './orderMesai/orderMesai.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'test',component:TestComponent,
    children: [
      {
          path: '',
          component: OrderListComponent,
          outlet: 'outa'
      },
      {
          path: '',
          component: OrderListComponent,
          outlet: 'outb'
      }]
  },
  {
    path:'orderList',component:OrderListComponent
  },
  {
    path:'mesai',component:OrderMesaiComponent
  },
  {
    path:'error',component:ErrorComponent
  },
  {
    path:'**',redirectTo:'test'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
