import { Component, OnInit } from '@angular/core';
import { Convite } from 'src/app/model/convite.model';
import { Events } from 'src/app/model/events.model';
import { ConviteService } from 'src/app/services/convite.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:Events[]
  convites:Convite[]
  userId:number = Number(sessionStorage.getItem('userId'))
  constructor(public eventsService:EventsService, private conviteService:ConviteService) { }

  ngOnInit(): void {
    this.getEvents()
    this.getConvites()
  }


  getEvents() {
    this.eventsService.findAll(this.userId).subscribe(
      data=>{
        this.events = data
      },
      erro=>{
      }
    )
  }

  getConvites(){
    this.conviteService.findWaitingInvites(this.userId).subscribe(
      data=>{
        this.convites = data
      },
      erro=>{
      }
    )
  }
}
