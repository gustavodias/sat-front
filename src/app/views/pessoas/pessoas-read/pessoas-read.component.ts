import { ResponsePageable } from './../../../models/responsePageable.model';
import { EmpresaService } from './../../../services/empresa.service';
import { GraduacaoService } from './../../../services/graduacao.service';
import { Graduacao } from './../../../models/graduacao';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-read',
  templateUrl: './pessoas-read.component.html',
  styleUrls: ['./pessoas-read.component.scss']
})
export class PessoasReadComponent implements OnInit {


  pessoa: Pessoa[] = [];

  displayedColumns: string[] = ["cod", "tipo","graduacao", "turma", "ano", "preccp", "nome", "nomeGuerra", "acoes"];
  dataSource = new MatTableDataSource<Pessoa>(this.pessoa);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(private service: PessoaService,
    private router: Router,
    private serviceGrad: GraduacaoService,
    private serviceEmp: EmpresaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe(res => {
      this.pessoa = res
      this.listarGrad()
      this.listarEmp()
      this.dataSource = new MatTableDataSource<Pessoa>(this.pessoa);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['pessoas/create'])
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  listarGrad():void{
    this.pessoa.forEach(x => {
      this.serviceGrad.findByCod(x.graduacao.cod).subscribe(res => {
        x.graduacao = res.posto
      })
    })
  }

  listarEmp():void{
    this.pessoa.forEach(x => {
      this.serviceEmp.findByCod(x.empresa.cod).subscribe(res => {
        x.empresa = res.nome
      })
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}