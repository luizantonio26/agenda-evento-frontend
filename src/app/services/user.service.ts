import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  getUser(userId:number){
    return this.http.get(environment.baseUrl+"user/"+userId).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  login(user:any):Observable<any>{
    return this.http.post(environment.baseUrl+"login", JSON.stringify(user), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  cadastro(user:any):Observable<any>{
    return this.http.post(environment.baseUrl+"user", JSON.stringify(user), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
