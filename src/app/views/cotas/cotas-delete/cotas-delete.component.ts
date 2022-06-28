import { GraduacaoService } from './../../../services/graduacao.service';
import { Graduacao } from 'src/app/models/graduacao';
import { CotaService } from './../../../services/cota.service';
import { Component, OnInit } from '@angular/core';
import { Cota } from 'src/app/models/cota';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotas-delete',
  templateUrl: './cotas-delete.component.html',
  styleUrls: ['./cotas-delete.component.scss']
})
export class CotasDeleteComponent implements OnInit {

  cod_cota = ''

  cota: Cota = {
    cod: '',
    valor: '',
    gradPosto: '',
  }

  graduacoes: Graduacao[] = []

  constructor(private router: Router,
    private service: CotaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_cota = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
  }

  findByCod(): void{
    this.service.findByCod(this.cod_cota).subscribe(res => {
      this.cota = res;
      this.cota.gradPosto = res.graduacao.posto;
      console.log(res)
    }) 
  }

  deletar():void{
    this.service.delete(this.cod_cota).subscribe(resposta => {
      this.router.navigate(['cotas'])
      this.service.message('Cota Deletada com Sucesso!')
    }, err => {
      this.service.message('Não é possivel Deletar a Cota, a mesma possui vinculo a uma Pessoa.')
    })
  }

}
