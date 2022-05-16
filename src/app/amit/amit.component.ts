import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-amit',
  templateUrl: './amit.component.html',
  styleUrls: ['./amit.component.css']
})
export class AmitComponent implements OnInit {

  constructor(private _router: Router, private userData:MessageService) { }
  users: any;
  nameSearch: string='';
  ngOnInit(): void {
    this.amit()
  }
  
  amit(){
    this.userData.users().subscribe((res)=>{
      console.log(res);
      this.users= res;
      console.log("mahender0",this.users.data.resident_data.array_of_all_residents)
     })
    console.log()
  }
  goemp() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        firstname: 'mahender',
        Lastname: 'sharma'
      }
    }
    this._router.navigate([''], navigationExtras)
  }
  isfinalSubmit() {
    return confirm("are you sure live this page (about)")
  }
  canDeactivate(){
    return confirm("are you sure live this page (about)")
  }
}
