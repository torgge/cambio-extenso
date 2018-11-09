import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

@Injectable({
  providedIn: 'root'
})
export class CambioService {
  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {}

  private rootLocation = `http://172.27.10.43:8080/cambio/v1`;
  private garaniLocation = (vlr: number) => this.rootLocation + `/guarani/${vlr}`;
  private realLocation = (vlr: number) => this.rootLocation + `/real/${vlr}`;

  public getExtensoGuarani(vlr: number): Observable<any> {
    return this.httpClient.get<String>(this.garaniLocation(vlr))
    .pipe(
          tap(extenso => console.log(`Extenso encontrado: ${extenso}`)),
          catchError(this.handleError('getExtensoGuarani', []))
    );
  }

  public getExtensoReal(vlr: number): Observable<any> {
    return this.httpClient.get<String>(this.realLocation(vlr))
    .pipe(
          tap(extenso => console.log(`Extenso encontrado: ${extenso}`)),
          catchError(this.handleError('getExtensoReal', []))
    );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MenuShareService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
