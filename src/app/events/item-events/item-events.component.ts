import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '../events.model';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-item-events',
  templateUrl: './item-events.component.html',
  styleUrls: ['./item-events.component.css']
})
export class ItemEventsComponent implements OnInit {
  dataInicio:Date
  dataFim:Date
  constructor(private route:Router, private eventsService:EventsService) { }

  ngOnInit(): void {
    this.dataInicio = new Date(this.events.data_inicio)
    this.dataFim = new Date(this.events.data_fim)
    console.log(this.dataInicio.getMinutes())
  }
  @Input() events:Events;

  remover(){
    if(this.events.id){
      let conf = confirm("Você está prestes a excluir o evento "+this.events.descricao)

      if(conf){
        this.eventsService.delete(this.events).subscribe(
          data=>{
            this.route.navigate([''])
          }, erro=>{
            console.log(erro)
          }
        )
        
      }
    }
  }
}
