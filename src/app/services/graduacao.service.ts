import { Graduacao } from "./../models/graduacao";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponsePageable } from "../models/responsePageable.model";

@Injectable({
  providedIn: "root",
})
export class GraduacaoService {
  
  baseUrl = environment.baseUrl + "/graduacao";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient, private snack: MatSnackBar) {}

  public findAll(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.baseUrl);
  }

  public findByCod(cod: any): Observable<Graduacao> {
    return this.httpClient.get<Graduacao>(`${this.baseUrl}/${cod}`);
  }

  public findByPosto(posto: any): Observable<Graduacao> {
  return this.httpClient.get<Graduacao>(`${this.baseUrl}/gradPosto/${posto}`);

  }

  public create(graduacao: Graduacao): Observable<Graduacao> {
    return this.httpClient.post<any>(this.baseUrl, graduacao, this.httpOptions);
  }

  update(graduacao: Graduacao): Observable<Graduacao>{
    return this.httpClient.put<Graduacao>((`${this.baseUrl}/${graduacao.cod}`), graduacao);
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
