import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConnectionService } from '../connection.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  email:FormControl;
  age:FormControl;
  gender:FormControl;
  fav:FormControl;
  fb:FormControl;
  ig:FormControl;
  ws:FormControl;
  tk:FormControl;
  tw:FormControl;
 
  constructor(  private service:ConnectionService) {
  
    this.email = new FormControl()
    this.email.valueChanges.subscribe(res=>{
      console.log(res)
    })
    this.age=new FormControl()
    this.age.valueChanges.subscribe(res=>{
      console.log(res)
    })
    this.gender=new FormControl()
    this.gender.valueChanges.subscribe(res=>{
      console.log("genero:"+res)
    })
    this.fav=new FormControl()
    this.fav.valueChanges.subscribe(res=>{
      console.log("fav:"+res)
    })
    this.fb=new FormControl()
    this.fb.valueChanges.subscribe(res=>{
      console.log(res)
    })
    this.ig=new FormControl()
    this.ig.valueChanges.subscribe(res=>{
      console.log(res)
    })
    this.ws=new FormControl()
    this.ws.valueChanges.subscribe(res=>{
      console.log(res)
    })
    this.tk=new FormControl()
    this.tk.valueChanges.subscribe(res=>{
      console.log(res)
    })
    this.tw=new FormControl()
    this.tw.valueChanges.subscribe(res=>{
      console.log(res)
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const info ={
      mail:this.email.value,
      age:this.age.value,
      gender:this.gender.value,
      fav:this.fav.value,
      hrsFB:this.fb.value,
      hrsIG:this.ig.value,
      hrsWS:this.ws.value,
      hrsTK:this.tk.value,
      hrsTW:this.tw.value
    }
    console.log("enviando")
    console.log(info)
    this.service.newRequest(info).subscribe(res=>{
      console.log(res)

    })
  }
}
