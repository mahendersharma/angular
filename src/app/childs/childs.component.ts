import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css'],
  inputs:['pdata1']
})
export class ChildsComponent implements OnInit {
pdata1:any;
// pdata2:any;

  constructor() { }

  ngOnInit(): void {
  }

}
