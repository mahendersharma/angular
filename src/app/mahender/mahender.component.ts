import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-mahender',
  templateUrl: './mahender.component.html',
  styleUrls: ['./mahender.component.css']
})
export class MahenderComponent implements OnInit {
  myallbooks: Book[] = []
  constructor(private _bookserviceService: BookserviceService) { }

  ngOnInit(): void {
    this.getallbooks()
  }

  getallbooks() {
    this._bookserviceService.getBooks().subscribe(res => this.myallbooks = res)
  }
}
