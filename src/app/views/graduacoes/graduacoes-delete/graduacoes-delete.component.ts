import { GraduacaoService } from './../../../services/graduacao.service';
import { Graduacao } from './../../../models/graduacao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-graduacoes-delete',
  templateUrl: './graduacoes-delete.component.html',
  styleUrls: ['./graduacoes-delete.component.scss']
})
export class GraduacoesDeleteComponent implements OnInit {

  cod_grad = ''

  graduacao: Graduacao = {
    cod: '',
    posto: ''
  }

  constructor(private router: Router,
              private service: GraduacaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_grad = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
  }

  findByCod(): void{
    this.service.findByCod(this.cod_grad).subscribe(resposta => {
      this.graduacao = resposta;
    }) 
  }

  deletar():void{
    this.service.delete(this.cod_grad).subscribe(resposta => {
      this.router.navigate(['graduacoes'])
      this.service.message('Graduação Deletada com Sucesso!')
    }, err => {
      this.service.message('Não é possivel Deletar a Graduacao, a mesma possui vinculo a uma Pessoa.')
    })
  }

}