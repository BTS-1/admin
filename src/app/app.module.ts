import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MenuItems} from './shared/menu-items/menu-items';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './theme/home/home.component';
import { LoginComponent } from './theme/auth/login/login.component';
import { RegisterComponent } from './theme/auth/register/register.component';
import { ForgotPasswordComponent } from './theme/auth/forgot-password/forgot-password.component';
import { GeneralService } from './theme/_services/general.service';
import { PodcastService } from './theme/_services/podcast.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './theme/_services/error.interceptor';
import { AuthService } from './theme/_services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicService } from './theme/_services/music.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MenuItems,
    GeneralService,
    PodcastService,
    ErrorInterceptorProvider,
    AuthService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
