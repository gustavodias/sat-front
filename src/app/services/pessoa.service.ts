import { Pessoa } from './../models/pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  baseUrl = environment.baseUrl +"/pessoas";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient, private snack: MatSnackBar) {}

  findAll(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.baseUrl);
  }

  public findAllPage(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.baseUrl);
  }

  public findByAno(ano: any): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(`${this.baseUrl}?ano=${ano}`);
  }

  public findByCod(cod: any): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(`${this.baseUrl}/${cod}`);
  }


  public create(objeto: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<any>(this.baseUrl, objeto, this.httpOptions);
  }

  update(objeto: Pessoa): Observable<Pessoa>{
    return this.httpClient.put<Pessoa>((`${this.baseUrl}/${objeto.cod}`), objeto);
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