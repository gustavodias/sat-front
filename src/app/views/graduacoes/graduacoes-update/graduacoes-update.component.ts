import { GraduacaoService } from './../../../services/graduacao.service';
import { Graduacao } from './../../../models/graduacao';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-graduacoes-update',
  templateUrl: './graduacoes-update.component.html',
  styleUrls: ['./graduacoes-update.component.scss']
})
export class GraduacoesUpdateComponent implements OnInit {

  cod_grad = ''

  graduacao: Graduacao = {
    cod: '',
    posto: ''
  }

  posto = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
              private service: GraduacaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_grad = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
  }

  findByCod(): void{
    this.service.findByCod(this.cod_grad).subscribe(res => {
      this.graduacao = res;
      console.log(this.graduacao)
      console.log(123)
    }) 
  }

  update():void{
    this.service.update(this.graduacao).subscribe(res => {
      this.router.navigate(['graduacoes'])
      this.service.message('Graduação Atualizada com Sucesso!')
    })
  }

  errorValidPosto(){
    if(this.posto.invalid){
      return 'O posto deve ter no mínimo 3 caracteres.'
    }
    return false
  }

}
