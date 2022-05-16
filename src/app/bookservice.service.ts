import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import 'rxjs-compat/add/observable/of'
import 'rxjs-compat/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private BOOKS: Book[] = [
    { id: 101, name: 'Angular 13', price: 1000, description: 'Angular Book' },
    { id: 102, name: 'Angular 10', price: 2000, description: 'Angular Book' },
    { id: 103, name: 'React JS', price: 1500, description: 'React Book' },
    { id: 104, name: 'Node JS', price: 2000, description: 'Node Book' },
    { id: 105, name: 'Typescript', price: 1200, description: 'Typescript Book' },
    { id: 106, name: 'Dot Net COre', price: 4000, description: 'Dot net Book' },
  ]
  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.BOOKS);
    // return Observable.of(this.BOOKS);
  }

  getbook(id:number):Observable<Book> {
    return this.getBooks().map(books => books.find(book=>book.id==id));
  }
}
