import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { GreetingComponent } from './greeting.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ServiceHeaderComponent } from './after-login/service-header.component';
import { FooterComponent } from './footer.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { LineChartComponent } from './decor/line-chart.component';
import { BarChartComponent } from './decor/bar-chart.component';
import { DoughnutChartComponent } from './decor/doughnut-chart.component';
// import { NvD3testDirective } from './after-login/nv-d3test.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GreetingComponent,
    AfterLoginComponent,
    ServiceHeaderComponent,
    FooterComponent,
    ServiceListComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
