
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DepartamentsLayoutComponent } from './departaments/departaments-layout/departaments-layout.component';
import { PaymentsLayoutComponent } from './payments/payments-layout/payments-layout.component';


const routes: Routes = [
  { path: 'departamentos', component: DepartamentsLayoutComponent },
  { path: 'pagos', component: PaymentsLayoutComponent },
  {
    path: '',
    redirectTo: '/departamentos',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
