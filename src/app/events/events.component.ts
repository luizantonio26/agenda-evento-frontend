import { Component, OnInit } from '@angular/core';
import { Events } from './events.model';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:Events[]
  userId:number = Number(sessionStorage.getItem('userId'))
  constructor(public eventsService:EventsService) { }

  ngOnInit(): void {
    this.getEvents()
  }


  getEvents() {
    this.eventsService.findAll(this.userId).subscribe(
      data=>{
        console.log(data)
        this.events = data
        console.log(this.events)
      },
      erro=>{
        console.log(erro)
      }
    )
  }
}
