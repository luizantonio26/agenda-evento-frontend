import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Convite } from 'src/app/model/convite.model';
import { Events } from 'src/app/model/events.model';
import { ConviteService } from 'src/app/services/convite.service';
import { EventsService } from 'src/app/services/events.service';
import { ListUsersInvitedComponent } from '../list-users-invited/list-users-invited.component';

@Component({
  selector: 'app-item-events',
  templateUrl: './item-events.component.html',
  styleUrls: ['./item-events.component.css']
})
export class ItemEventsComponent implements OnInit {
  dataInicio:Date
  dataFim:Date
  userId:number = +sessionStorage.getItem('userId')

  constructor(private dialog:MatDialog, private route:Router, private eventsService:EventsService, private conviteService:ConviteService) { }

  ngOnInit(): void {
    if(this.events){
      this.dataInicio = new Date(this.events.data_inicio)
      this.dataFim = new Date(this.events.data_fim)
    }else{
      this.dataInicio = new Date(this.convite.events.data_inicio)
      this.dataFim = new Date(this.convite.events.data_fim)
    }
  }

  @Input() events:Events;
  @Input() convite:Convite;

  remover(){
    if(this.events.id){
      if(this.userId == this.events.organizador.id){
          let conf = confirm("Você está prestes a excluir o evento "+this.events.descricao)

          if(conf){
            this.eventsService.delete(this.events).subscribe(
              data=>{
                window.location.reload()
              }, erro=>{
                console.log(erro)
              }
            )
            
          }
      }else{
        alert("Não é possivel excluir um evento do qual não se é organizador")
      }
    }
  }
  
  aceitar(){
    
    const data = {
      userId:this.convite.user.id,
      conviteId:this.convite.id,
      status:"aceito"
    }
    this.conviteService.confirmInvite(data).subscribe(
      data=>{
        alert("Seu convite foi aceito com sucesso!")
        window.location.reload()
      },
      erro=>{
      }
    )
  }

  recusar(){
    const data = {
      userId:this.convite.user.id,
      conviteId:this.convite.id,
      status:"recusado"
    }
    this.conviteService.confirmInvite(data).subscribe(
      data=>{
        alert("Seu convite foi recusado com sucesso!")
      },
      erro=>{
      }
    )
  }

  desistir(){
    const conf = confirm("Você está prestes a desistir de um evento ao qual foi convidado")

    if(conf){
      const data = {
        userId:this.userId,
        eventId:this.events.id,
        status:"recusado"
      }
      this.conviteService.desistir(data).subscribe(
        data=>{
        },
        erro=>{
        }
      )
    }
  }

  verConvidados(){
    const dialogRef = this.dialog.open(ListUsersInvitedComponent, {
      width: '600px',
      height: '600px',
      data: {events:this.events}
    });
  }
}
