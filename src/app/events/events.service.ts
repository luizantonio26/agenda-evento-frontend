import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Events } from './events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  findOne(eventId:number):Observable<any>{
    return this.http.get(environment.baseUrl+'events/'+eventId)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  findAll(userId:number):Observable<any>{
    return this.http.get(environment.baseUrl+'events?userId='+userId)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  create(events:Events):Observable<any>{
    return this.http.post(environment.baseUrl+'events', JSON.stringify(events), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  update(events:Events):Observable<any>{
    return this.http.put(environment.baseUrl+'events/'+events.id, JSON.stringify(events), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  delete(events:Events){
    return this.http.delete(environment.baseUrl+'events/'+events.id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    console.log(error.error.message)
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `message: ${error.message}`;
    }
    return throwError(errorMessage);
  };
}
