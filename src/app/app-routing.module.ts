import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivechildGuard } from './activechild.guard';
import { AmitComponent } from './amit/amit.component';
import { AuthGuard } from './auth.guard';
import { ChildsComponent } from './childs/childs.component';
import { DeactivateGuard } from './deactivate.guard';
import { EmpComponent } from './emp/emp.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { BookComponent } from './mahender/book/book.component';
import { MahenderComponent } from './mahender/mahender.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentsDeatilsComponent } from './parents-deatils/parents-deatils.component';
import { ParentsComponent } from './parents/parents.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegComponent } from './reg/reg.component';
import { SchoolrecodeComponent } from './schoolrecode/schoolrecode.component';
import { SerComponent } from './ser/ser.component';
import { StudentComponent } from './student/student.component';
import { StudetComponent } from './studet/studet.component';

const routes: Routes = [
  //{path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path: '', component: EmpComponent },
  { path: 'amit', component: AmitComponent, canDeactivate: [DeactivateGuard] },
  // { path: 'amit', component: AmitComponent},
  { path: 'studentDATA', component: MahenderComponent, canActivate: [AuthGuard] },
  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent, },
      { path: 'bio', component: RegComponent },
      {
        path: 'Details',
        children: [
          { path: '', component: StudetComponent },
          {
            path: '', canActivateChild: [ActivechildGuard],
            children: [
              { path: 'ParentsDeatils', component: ParentsDeatilsComponent },
              { path: 'Schoolrecode', component: SchoolrecodeComponent }
            ]
          }

        ]
      }

    ]
  },
  { path: 'bookdetails/:id', component: BookComponent },
  { path: 'servicecall', component: SerComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'child', component: ChildsComponent },
  {path:'reactiveform', component: ReactiveformComponent},
  {path:'formarray', component:FormarrayComponent}
  // { path: '**', component: PagenotfoundComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
