import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/model/events.model';
import { User } from 'src/app/model/user.model';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  formEvents:FormGroup
  constructor(public eventsService:EventsService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    let events = new Events()
    events.organizador = new User()
    events.organizador.id = +sessionStorage.getItem("userId")
    this.criarForm(events)
  
  }
  createEvents(){
    this.eventsService.create(this.formEvents.value)
    .subscribe(
      data=>{
        this.formEvents.reset();
        this.router.navigate([""])
      },
      error=>{
        alert(error)
      }
    )
  }

  criarForm(events:Events){
    console.log(events)
    this.formEvents = this.fb.group({
      descricao:events.descricao,
      data_inicio:events.data_inicio,
      data_fim:events.data_fim,
      organizador:events.organizador
    });
  }
}
