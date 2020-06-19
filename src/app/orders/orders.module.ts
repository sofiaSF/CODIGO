import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { DialogModule } from 'primeng/dialog/dialog';


@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersComponent],
})
export class OrdersModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/