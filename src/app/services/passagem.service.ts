import { Passagem } from './../models/passagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {
  baseUrl = environment.baseUrl + "/passagens";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient, private snack: MatSnackBar) {}

  public findAll(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.baseUrl);
  }

  public findByCod(cod: any): Observable<Passagem> {
    return this.httpClient.get<Passagem>(`${this.baseUrl}/${cod}`);
}

  public create(passagem: Passagem): Observable<Passagem> {
    return this.httpClient.post<any>(this.baseUrl, passagem, this.httpOptions);
  }

  update(passagem: Passagem): Observable<Passagem>{
    return this.httpClient.put<Passagem>((`${this.baseUrl}/${passagem.cod}`), passagem);
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
