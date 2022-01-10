import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
data:any
  constructor(private service:ConnectionService) { }
 
  ngOnInit(): void {
    this.cargarData()
  }
  cargarData(){
    this.service.stadisticRequest().subscribe(res=>{
      console.log(res)
      this.data=res
    })
  }

}
