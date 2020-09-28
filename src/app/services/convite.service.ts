import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Convite } from '../model/convite.model';

@Injectable({
  providedIn: 'root'
})
export class ConviteService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  create(convite:any):Observable<any>{
    return this.http.post(environment.baseUrl+"invite", JSON.stringify(convite), this.httpOptions)
  }

  findWaitingInvites(userId:number):Observable<any>{
    return this.http.get(environment.baseUrl+"waitingInvites/user/"+userId)
  }

  findAceptedInvites(eventId:number):Observable<any>{
    return this.http.get(environment.baseUrl+"aceptedInvites/"+eventId)
  }

  findRefusedInvites(eventId:number):Observable<any>{
    return this.http.get(environment.baseUrl+"refusedInvites/"+eventId)
  }

  confirmInvite(data:any):Observable<any>{
    return this.http.put(environment.baseUrl+"confirmInvite/"+data.conviteId, data, this.httpOptions)
  }

  desistir(data:any):Observable<any>{
    return this.http.put(environment.baseUrl+"giveUp/event/"+data.eventId, data, this.httpOptions)
  }

}
