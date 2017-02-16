import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { GreetingComponent } from './greeting.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ServiceHeaderComponent } from './after-login/service-header.component';
import { FooterComponent } from './footer.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GreetingComponent,
    AfterLoginComponent,
    ServiceHeaderComponent,
    FooterComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
