import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";


const routes: Routes = [
  {path: '',redirectTo: '/about-us' , pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent}
];
@NgModule({
  // declarations: [], why unnecessary ?
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
