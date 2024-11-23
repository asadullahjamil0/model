import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { LogPageComponent } from './log-page/log-page.component';


@NgModule({
  declarations: [
    ListComponent,
    LogPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
