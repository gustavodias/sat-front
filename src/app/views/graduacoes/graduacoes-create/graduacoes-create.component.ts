import { GraduacaoService } from './../../../services/graduacao.service';
import { Graduacao } from './../../../models/graduacao';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graduacoes-create',
  templateUrl: './graduacoes-create.component.html',
  styleUrls: ['./graduacoes-create.component.scss']
})
export class GraduacoesCreateComponent implements OnInit{

  graduacao: Graduacao = {
    cod: '',
    posto: ''
  }

  posto = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
              private service: GraduacaoService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['graduacoes'])
  }

  create():void{
    this.service.create(this.graduacao).subscribe(arg => {
      this.router.navigate(['graduacoes'])
      this.service.message('Graduação cadastrada com Sucesso!')
      }, err=>{
        if(err.error.error.match('validacao')) {
        this.service.message(err.error.error);
      }else if(err.error.errors[0].match('vazio')){
        this.service.message(err.error.errors[0].message);
      }
      }   
      ); 
  }

  errorValidPosto(){
    if(this.posto.invalid){
      return 'O posto deve ter no mínimo 3 caracteres.'
    }
    return false
  }
}