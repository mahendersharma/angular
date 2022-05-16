import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    // 1. roter snapshot param
    alert(this._route.snapshot.params['id'])

  }

}
