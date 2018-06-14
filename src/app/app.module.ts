import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LaddaModule } from 'angular2-ladda';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

import { AuthService } from './services/api/auth.service';
import { NotificationService } from './services/utilities/notification.service';

import { AuthUserGuard } from './guards/auth.user.guard';
import { RequestInterceptorsProviders } from './middlewares/request/request-interceptors.provider';
import { ErrorHandlerProviders } from './middlewares/error/error.provider';
import { HeaderpublicComponent } from './components/common/headerpublic/headerpublic.component';
import { NotificationComponent } from './components/common/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderpublicComponent,
    NotificationComponent,
    // components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    LaddaModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    AuthService,
    NotificationService,
    AuthUserGuard,
    // services
    RequestInterceptorsProviders,
    ErrorHandlerProviders
    // middleware
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
