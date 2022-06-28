import { Cota } from './../models/cota';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class CotaService {
  baseUrl = environment.baseUrl +"/cotas";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient, private snack: MatSnackBar) {}

  public findAll(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.baseUrl);
  }

  public findByAno(ano: any): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(`${this.baseUrl}?ano=${ano}`);
  }

  public findByCod(cod: any): Observable<Cota> {
    return this.httpClient.get<Cota>(`${this.baseUrl}/${cod}`);
  }


  public create(objeto: Cota): Observable<Cota> {
    return this.httpClient.post<any>(this.baseUrl, objeto, this.httpOptions);
  }

  update(objeto: Cota): Observable<Cota>{
    return this.httpClient.put<Cota>((`${this.baseUrl}/${objeto.cod}`), objeto);
  }

  delete(cod: any): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${cod}`);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000,
    });
  }
}
