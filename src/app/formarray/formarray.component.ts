import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  userform:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    // this.userform = this._fb.group({
    //   fname:['',Validators.required],
    //   flast:['',Validators.required],
    //   email:['',Validators.required],
    //   phone:['',Validators.required],

    // })



    this.userform = this._fb.group({
      fname:['',Validators.required],
      flast:['',Validators.required],
      data:this._fb.group({
        email:['',Validators.required],
        phone:['',Validators.required]
      })
      

    })
  }
  onformsubmit(){
    console.log(this.userform.value)
    console.log(this.userform.valid)

    let datas= this.userform.get('data')
    console.log("):",datas.value)
  }

}
