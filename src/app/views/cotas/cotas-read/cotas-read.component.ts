import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { CotaService } from './../../../services/cota.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cota } from 'src/app/models/cota';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cotas-read',
  templateUrl: './cotas-read.component.html',
  styleUrls: ['./cotas-read.component.scss']
})
export class CotasReadComponent implements OnInit {

  ano: any

  cota: Cota[] = [];

  cotaAno: Cota[] = [];

  displayedColumns: string[] = ["cod", "gradPosto", "valor", "data", "acoes"];
  dataSource = new MatTableDataSource<Cota>(this.cota);

  dataSourceAno = new MatTableDataSource<Cota>(this.cotaAno);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CotaService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAll();
    this.findByAno(2021);
  }

  findAll():void{
    this.service.findAll().subscribe(res => {
      this.cota = res.content
      this.dataSource = new MatTableDataSource<Cota>(this.cota);
      this.dataSource.paginator = this.paginator;
    })
  }

  findByAno(anoIn:any):void{
    this.ano = anoIn
    console.log(this.ano)
    this.service.findByAno(this.ano).subscribe(res => {
      this.cotaAno = res.content
      console.log(this.cotaAno);
      this.dataSourceAno = new MatTableDataSource<Cota>(this.cotaAno);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['cotas/create'])
  }

  selected(event:MatSelectChange) {
    console.log(event.value);
    this.findByAno(event.value);
}

}