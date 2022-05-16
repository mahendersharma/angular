import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  regForm:any;

  constructor(private _fb :FormBuilder) { }

  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   id:new FormControl(),
    //   name:new FormControl(),
    //   lastname:new FormControl(),
    //   email:new FormControl(),
    //   phone:new FormControl(),
    // })

    //   this.regForm = this._fb.group({
    //   id:new FormControl(),
    //   name:new FormControl(),
    //   lastname:new FormControl(),
    //   email:new FormControl(),
    //   phone:new FormControl(),
    // })


    //   this.regForm = this._fb.group({
    //   id:new FormControl(),
    //   name:new FormControl("mahender"),
    //   lastname:new FormControl("sharma"),
    //   email:new FormControl(),
    //   phone:new FormControl(),
    // })

    // this.regForm = this._fb.group({
    //   id:new FormControl(),
    //   name:new FormControl(''),
    //   lastname:new FormControl(''),
    //   email:new FormControl(''),
    //   phone:new FormControl(''),
    // })

    // this.regForm = this._fb.group({
    //   id:[],
    //   name:[],
    //   lastname:[],
    //   email:[],
    //   phone:[],
    // })

    // null manage 
    // this.regForm = this._fb.group({
    //   id:[],
    //   name:[''],
    //   lastname:[''],
    //   email:[''],
    //   phone:['9540354422'],
    // })


    // single validation work
    // this.regForm = this._fb.group({
    //   id:[],
    //   name:['',Validators.required],
    //   lastname:['',Validators.required],
    //   email:['',Validators.required],
    //   phone:['9540354422'],
    // })


        // multipul validation work


    // this.regForm = this._fb.group({
    //   id:[],
    //   name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    //   lastname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    //   email:['',[Validators.required,Validators.email]],
    //   phone:['9540354422'],
    // })

// form arraY CONCEPT

    this.regForm = this._fb.group({
      id:[],
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      lastname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      phone :new FormArray([
        new FormControl(Validators.required)
      ]),
    })

    // this.regForm.get('name').valueChanges.subscribe(name=>{
    //   console.log('name change'+ name)
    // })

    // this.regForm.valueChanges.subscribe(data=>{
    //   console.log('name change'+ data.name)
    //   console.log('phone change'+ data.phone)
    //   console.log('lastname change'+ data.lastname)
    // })

    // this.regForm.get('name').statusChanges.subscribe(res=>{
    //   console.log("name check stutas",res)
    // })

    //  this.regForm.statusChanges.subscribe(res=>{
    //     console.log("form check stutas",res)
    //   })


    let arr= new FormArray([
      new FormControl(''),
      new FormControl('')
    ])

    console.log(arr.value)
    
  }
  register(){
    console.log(this.regForm.value)
    // console.log(this.regForm.get('name').value)
    console.log(this.regForm.valid)
  }
  resat2(){

    this.regForm.reset({
      name:this.regForm.get('name').value,lastname:'sharma'
    });
  }
  fillform(){
    this.regForm.setValue({
      id:101,
      name:'admin',
      email:'sharma27july1999@gmail.com',
      lastname:'url miss',
      phone:9540354422
    })
  }
  patchvalue(){
    this.regForm.patchValue({
      id:101,
      name:'admin',
      lastname:'url miss',
      phone:9540354422
    })
  }

  deleterow(index:number){
this.regForm.get('phone').removeAt(index)
  }
  addmore(){
this.regForm.get('phone').push(new FormControl());
  }
}
