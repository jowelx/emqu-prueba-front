import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import {ConnectionService}from '../app/connection.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emqu-prueba';
  constructor(private ConnectionService:ConnectionService){}
  ngOnInit(): void {
  
   
    this.rest()
  }
  public rest(){
      this.ConnectionService.get("")
      .subscribe(res=>{
        console.log(res)
      })

  }

}
