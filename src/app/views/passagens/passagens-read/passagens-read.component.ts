import { PassagemService } from './../../../services/passagem.service';
import { Passagem } from './../../../models/passagem';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passagens-read',
  templateUrl: './passagens-read.component.html',
  styleUrls: ['./passagens-read.component.scss']
})
export class PassagensReadComponent implements OnInit {

  passagem: Passagem[] = [];

  displayedColumns: string[] = ["cod", "tarifa", "valor", "data", "acoes"];
  dataSource = new MatTableDataSource<Passagem>(this.passagem);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PassagemService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe(res => {
      this.passagem = res.content
      this.dataSource = new MatTableDataSource<Passagem>(this.passagem);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['passagens/create'])
  }

}

