import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // preserveWhitespaces :true
})
export class AppComponent {
constructor(private _router:Router){}

gotoback(){
  this._router.navigate([''])
  }
}



