import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Company1RoutingModule } from './company1-routing.module';
import { Company1Component } from './company1.component';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  declarations: [
    Company1Component,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    Company1RoutingModule
  ]
})
export class Company1Module { 
  constructor(){
    console.log("company module loaded...")
  }
}
