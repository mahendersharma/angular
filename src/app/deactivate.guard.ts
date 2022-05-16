import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AmitComponent } from './amit/amit.component';

interface cancomponentDeactivate{
  canDeactivate:()=> Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
}
@Injectable({
  providedIn: 'root'
})
// export class DeactivateGuard implements CanDeactivate<unknown> {
  // canDeactivate(
  //   component: unknown,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   let issumittes: boolean = false;
  //   if (issumittes == false) {
  //     return confirm("are you sure live this page ")
  //   }
  //   return true;
  // }
  // }



  // export class DeactivateGuard implements CanDeactivate<unknown> {
  // component based
  // canDeactivate(
  //   component: AmitComponent,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  //   return component.isfinalSubmit ? component.isfinalSubmit() : true;
  // }
  // }


export class DeactivateGuard implements CanDeactivate<cancomponentDeactivate> {

  canDeactivate(
      component: cancomponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate ? component.canDeactivate() : true;
      // return component.isfinalSubmit ? component.isfinalSubmit() : true;
    }

}
