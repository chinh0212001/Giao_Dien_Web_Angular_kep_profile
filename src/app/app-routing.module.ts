import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./form_login/register/register.component";
import {HomeComponent} from "./home/home/home.component";
import {ProfileComponent} from "./profile/profile/profile.component";
import {VideoComponent} from "./profile/video/video.component";
import {BanbeComponent} from "./profile/banbe/banbe.component";

const routes: Routes = [
  {path: 'register',component:RegisterComponent},
  {path:'', component: HomeComponent},
  {path:'profile', component:ProfileComponent,
  children:[
      {path: 'video', component:VideoComponent},
      {path:'banbe', component:BanbeComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
