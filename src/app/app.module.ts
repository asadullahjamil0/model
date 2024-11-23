import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
