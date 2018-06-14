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
import { ToasterComponent } from './components/global/toaster/toaster.component';
import { HomeComponent } from './components/pages/home/home.component';

import { AuthService } from './services/api/auth.service';

import { AuthUserGuard } from './guards/auth.user.guard';
import { RequestInterceptorsProviders } from './middlewares/request/request-interceptors';
import { HeaderpublicComponent } from './components/common/headerpublic/headerpublic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderpublicComponent,
    ToasterComponent
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
    ToasterComponent,
    AuthService,
    AuthUserGuard,
    // services
    RequestInterceptorsProviders
    // middleware
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
