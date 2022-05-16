import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  Fullname: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  senddata(val, val1) {
    if(val!="" && val1!=""){
      this.Fullname = val +" "+ val1
    }
  }

}
