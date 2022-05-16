import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { Employee } from './employee';
import { AmitComponent } from './amit/amit.component';
import { StudentComponent } from './student/student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MahenderComponent } from './mahender/mahender.component';
import { RegComponent } from './reg/reg.component';
import { StudetComponent } from './studet/studet.component';
import { ParentsDeatilsComponent } from './parents-deatils/parents-deatils.component';
import { SchoolrecodeComponent } from './schoolrecode/schoolrecode.component';
import { BookComponent } from './mahender/book/book.component';
import { SerComponent } from './ser/ser.component';
import { MessageService } from './message.service';
import { ParentsComponent } from './parents/parents.component';
import { ChildsComponent } from './childs/childs.component';
import { Company1Module } from './company1/company1.module';
import { PersonModule } from './person/person.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    AmitComponent,
    StudentComponent,
    PagenotfoundComponent,
    MahenderComponent,
    RegComponent,
    StudetComponent,
    ParentsDeatilsComponent,
    SchoolrecodeComponent,
    BookComponent,
    SerComponent,
    ParentsComponent,
    ChildsComponent,
    ReactiveformComponent,
    FormarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Company1Module,
    PersonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule ,
    MatTableModule
  ],
  providers: [Employee,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule loaded...")
  } 
}
