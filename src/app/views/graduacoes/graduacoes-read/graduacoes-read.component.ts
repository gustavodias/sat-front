import { GraduacaoService } from './../../../services/graduacao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Graduacao } from 'src/app/models/graduacao';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-graduacoes-read',
  templateUrl: './graduacoes-read.component.html',
  styleUrls: ['./graduacoes-read.component.scss']
})
export class GraduacoesReadComponent implements OnInit {

  graduacoes: Graduacao[] = [];

  displayedColumns: string[] = ["cod", "posto", "acoes"];
  dataSource = new MatTableDataSource<Graduacao>(this.graduacoes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: GraduacaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe(res => {
      this.graduacoes = res.content
      this.dataSource = new MatTableDataSource<Graduacao>(this.graduacoes);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['graduacoes/create'])
  }

}
