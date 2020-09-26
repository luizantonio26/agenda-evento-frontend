import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {
  formEvents:FormGroup
  constructor(private activatedRoute:ActivatedRoute ,private formBuilder: FormBuilder,private router: Router, private eventsService:EventsService) { }

  ngOnInit(): void {
    let eventId
    this.activatedRoute.queryParams.subscribe(
      id=>{
        eventId = id['id']
      }
    )

    this.formEvents = this.formBuilder.group({
      id: [''],
      descricao: [''],
      data_inicio: [''],
      data_fim: ['']
    });

    this.eventsService.findOne(eventId).subscribe(
      data=>{
        this.formEvents.setValue(data)
      }
    )

    console.log(eventId)
  }

  editEvents(){
    this.eventsService.update(this.formEvents.value).subscribe(
      data=>{
        this.router.navigate([""])
      },
      erro=>{
        console.log(erro)
      }
    )
  }

}
