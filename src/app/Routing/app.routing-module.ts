import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../About/about.component';
import { HomeComponent } from '../Home/home.component';


const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };