import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.css']
})
export class SerComponent implements OnInit {
  message: string;
  constructor(private _message: MessageService) { }

  ngOnInit(): void {
    this.message = this._message.getmesage();
    console.log(this.message)
  }
  Register(regData: NgForm) {
    console.log(regData.value)
    console.log(regData.valid)
  }

}
