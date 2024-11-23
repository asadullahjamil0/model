import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component'
import { LogPageComponent } from './log-page/log-page.component'

const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'log-page',component:LogPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
