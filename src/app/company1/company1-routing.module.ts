import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { Company1Component } from './company1.component';

const routes: Routes = [
  {
    path: 'company', component: Company1Component,
    children: [
      { path: 'company-list', component: CompanyListComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Company1RoutingModule { }
