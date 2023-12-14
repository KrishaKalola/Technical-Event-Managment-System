import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    AdminComponent
  ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  RouterModule ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
