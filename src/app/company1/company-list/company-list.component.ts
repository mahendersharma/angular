import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
company:any;
  constructor() { }

  ngOnInit(): void {
    this.company=[
      {name:'hcl',countary:'india'},
      {name:'rnf',countary:'noida'},
      {name:'taazaa',countary:'india'},
      {name:'apple',countary:'delhi'},
      {name:'tcs',countary:'gurgaon'},
      {name:'Nokia',countary:'india'},
      {name:'samsung',countary:'india'},
      {name:'accenture',countary:'india'},
      {name:'infoys',countary:'india'},

    ]
  }

}
