import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { GreetingComponent } from './greeting.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ServiceHeaderComponent } from './after-login/service-header.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { LineChartComponent } from './decor/line-chart.component';
import { BarChartComponent } from './decor/bar-chart.component';
import { DoughnutChartComponent } from './decor/doughnut-chart.component';
import { OperationComponent } from './operation/operation.component';
import { DesignComponent } from './design/design.component';

@Component({
  selector: 'svr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
