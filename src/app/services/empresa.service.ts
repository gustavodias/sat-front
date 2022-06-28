import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Empresa } from "../models/empresa";
import { ResponsePageable } from "../models/responsePageable.model";

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  baseUrl = environment.baseUrl +"/empresas";

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl);
  }

  public findAllPage(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.baseUrl);
  }

  findByCod(cod : any): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${cod}`);
  }

  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa);
  }

  update(empresa: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>((`${this.baseUrl}/${empresa.cod}`), empresa);
  }

  delete(cod: any): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${cod}`);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
