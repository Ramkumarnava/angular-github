import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReposModule } from './components/repos/repos.module';

import { AppRoutes } from './app-routing.module';


@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutes, ReposModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
