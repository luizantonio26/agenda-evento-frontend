import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Convite } from 'src/app/model/convite.model';
import { Events } from 'src/app/model/events.model';
import { ConviteService } from 'src/app/services/convite.service';
import { ItemEventsComponent } from '../item-events/item-events.component';

export interface DataDialog{
  events:Events
}

export class DataConvite{
  email:string
  eventId:number
}

@Component({
  selector: 'app-list-users-invited',
  templateUrl: './list-users-invited.component.html',
  styleUrls: ['./list-users-invited.component.css']
})

export class ListUsersInvitedComponent implements OnInit {
  formConvite:FormGroup
  constructor(private conviteService:ConviteService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog
    ) { }
  acepted:Convite
  refused:Convite
  convite:DataConvite
  ngOnInit(): void {
    this.getUserConvitesAceitos()
    this.getUserConvitesRecusados()
    this.criarForm(new DataConvite())
  }

  getUserConvitesAceitos(){
    this.conviteService.findAceptedInvites(this.data.events.id).subscribe(
      data=>{
        this.acepted = data
      },erro=>{
      }
    )
  }

  getUserConvitesRecusados(){
    this.conviteService.findRefusedInvites(this.data.events.id).subscribe(
      data=>{
        this.refused = data
      },erro=>{
      }
    )
  }
  convidar(){
    const {email} = this.formConvite.value
    const eventId = this.data.events.id
    
    this.conviteService.create({email, eventId}).subscribe(
      data=>{
        alert("convite para "+data.user.nome+" enviado com sucesso!")
        this.formConvite.reset()
      },erro=>{
        alert(erro)
      }
    )
  }
  criarForm(convite:DataConvite){
    this.formConvite = this.fb.group({
      email:convite.email
    });
  }
}

