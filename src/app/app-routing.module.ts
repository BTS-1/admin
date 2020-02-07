import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import { HomeComponent } from './theme/home/home.component';
import { LoginComponent } from './theme/auth/login/login.component';
import { RegisterComponent } from './theme/auth/register/register.component';
import { ForgotPasswordComponent } from './theme/auth/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'podcast',
        loadChildren: './theme/podcast/podcast.module#PodcastModule'
      },
      {
        path: 'music',
        loadChildren: './theme/music/music.module#MusicModule'
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
