import { GraduacaoService } from './../../../services/graduacao.service';
import { CotaService } from './../../../services/cota.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cota } from 'src/app/models/cota';
import { Graduacao } from 'src/app/models/graduacao';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-cotas-create',
  templateUrl: './cotas-create.component.html',
  styleUrls: ['./cotas-create.component.scss']
})
export class CotasCreateComponent implements OnInit {

  cota: Cota = {
    cod: '',
    valor: '',
    gradPosto: ''
  }

  graduacoes: Graduacao[] = [];
  

  gradPosto = new FormControl('', [Validators.minLength(1)])
  valor = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
              private service: CotaService,
              private serviceGrad: GraduacaoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.serviceGrad.findAll().subscribe(res => {
      this.graduacoes = res.content
    })
  }

  create():void{
    this.service.create(this.cota).subscribe(() => {
      this.router.navigate(['cotas'])
      this.service.message('Cota cadastrada com Sucesso!')
      }, err=>{
        if(err.error.error.match('validacao')) {
        this.service.message(err.error.error);
      }else if(err.error.errors[0].match('vazio')){
        this.service.message(err.error.errors[0].message);
      }
      }   
      ); 
  }

  errorValidGrad(){
    if(this.gradPosto.invalid){
      return 'O Posto deve ter no mínimo 1 caracteres.'
    }
    return false
  }

  errorValidValor(){
    if(this.valor.invalid){
      return 'O valor deve ter no mínimo 2 caracteres.'
    }
    return false
  }
}
