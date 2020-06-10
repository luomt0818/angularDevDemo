import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './orderList/orderList.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { OrderMesaiComponent } from './orderMesai/orderMesai.component';
import { TestComponent } from './test/test.component';
import { OthersComponent } from './others/others.component';
import { GridDemoComponent } from './gridDemo/gridDemo.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'angular-slickgrid',component:GridDemoComponent
  },
  {
    path:'pdfViewer',component:PdfViewerComponent
  },
  {
    path:'orderListOuter',component:TestComponent,
    children: [
      {
          path: '',
          component: OrderListComponent,
          outlet: 'outLeft'
      },
      {
          path: '',
          component: OrderListComponent,
          outlet: 'outRight'
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
    path:'others',component:OthersComponent
  },
  {
    path:'**',redirectTo:'orderList'
  }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
