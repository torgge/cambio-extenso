import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import { Cambio } from './model/Cambio';

@Injectable({
  providedIn: 'root'
})
export class CambioService {

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {
  }

  private rootLocation = `http://172.27.10.43:9797/extenso/v1`;

  private garaniLocation = (vlr: number) => this.rootLocation + `/guarani/${vlr}`;

  private realLocation = (vlr: number) => this.rootLocation + `/real/${vlr}`;

  public getExtensoGuarani(vlr: number): Observable<any> {
    return this.httpClient.get<Cambio>(this.garaniLocation(vlr))
      .pipe(
        tap(extenso => console.log(`Extenso encontrado: ${extenso}`)),
        catchError(this.handleError('getExtensoGuarani', []))
      );
  }

  public getExtenso(vlr: number, moeda: number): Observable<any> {
    console.log(`Moeda Selecionada`, moeda);
    return moeda === 1 ? this.getExtensoGuarani(vlr) : this.getExtensoReal(vlr);
  }

  public getExtensoGuaraniV2(vlr: number): Observable<any> {
    console.log(`Valor Enviado: `, vlr);
    return this.httpClient.get<Cambio>(this.garaniLocation(vlr) );
  }

  public getExtensoRealV2(vlr: number): Observable<any> {
    return this.httpClient.get<String>(this.realLocation(vlr));
  }

  public getExtensoReal(vlr: number): Observable<any> {
    return this.httpClient.get<Cambio>(this.realLocation(vlr))
      .pipe(
        tap(extenso => console.log(`Extenso encontrado: ${extenso}`)),
        catchError(this.handleError('getExtensoReal', []))
      );
  }


  /** Log a message with the MessageService */
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
