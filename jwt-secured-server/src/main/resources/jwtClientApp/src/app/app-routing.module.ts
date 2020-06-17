import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'profile',
  component: ProfileComponent
},{
  path: 'forbidden',
  component: ForbiddenComponent
},{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},{
  path: '**',
  component: NotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
