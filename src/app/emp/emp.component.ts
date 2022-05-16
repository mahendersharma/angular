import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  inputs:['pdata']
})
export class EmpComponent implements OnInit {
  pdata:any;
  constructor(private _route:ActivatedRoute) { 
    // this._route.queryParams.subscribe(param=>{
    //   alert(param['firstname'])
    //   alert(param['Lastname'])

    // })
  }
  
  ngOnInit(): void {
  }
  datasend(val:any){
      console.log(val)
  }
  datasends(val:any){
    console.log(val)
  }

}
