import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatPaginatorModule} from "@angular/material/paginator";
import { NavBarComponent } from './nav-foot/nav-bar/nav-bar.component';
import { FoorterComponent } from './nav-foot/foorter/foorter.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './form_login/register/register.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { VideoComponent } from './profile/video/video.component';
import { BanbeComponent } from './profile/banbe/banbe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FoorterComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    VideoComponent,
    BanbeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
