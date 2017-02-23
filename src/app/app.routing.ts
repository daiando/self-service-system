import { RouterModule, Routes } from '@angular/router';

import { AfterLoginComponent } from './after-login/after-login.component';
import { GreetingComponent } from './greeting.component';
import { DesignComponent } from './design/design.component';
import { OperationComponent } from './operation/operation.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/before_login', pathMatch: 'full' },
  { path: 'before_login', component: GreetingComponent },
  { path: 'main', component: AfterLoginComponent },
  { path: 'design', component: DesignComponent },
  { path: 'operation', component: OperationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
