import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateListComponent } from './list/createlist.component';
import { ListDetailsComponent } from "./list/listdetails.component";
import { ListComponent } from "./list/list.component";
import { CreateItemComponent } from "./item/createitem.component";
import { RegisterComponent } from "./register/register.component";

import { appRoutes } from './_constants/routes.constants';

import { AuthenticationService, ItemService, ListService } from "./_services/index";

import { AuthGuard } from './_guards/index';

import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateListComponent,
    ListDetailsComponent,
    ListComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    CdkTableModule,
    MaterialModule
  ],
  providers: [ItemService, AuthenticationService, ListService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
