import { PassagemService } from './../../../services/passagem.service';
import { Passagem } from './../../../models/passagem';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passagens-create',
  templateUrl: './passagens-create.component.html',
  styleUrls: ['./passagens-create.component.scss']
})
export class PassagensCreateComponent implements OnInit {

  passagem: Passagem = {
    cod: '',
    tarifa: '',
    valor: '',
    data: ''
  }

  tarifa = new FormControl('', [Validators.minLength(1)])
  valor = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
              private service: PassagemService) { }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.passagem).subscribe(() => {
      this.router.navigate(['passagens'])
      this.service.message('Passagem cadastrada com Sucesso!')
      }, err=>{
        if(err.error.error.match('validacao')) {
        this.service.message(err.error.error);
      }else if(err.error.errors[0].match('vazio')){
        this.service.message(err.error.errors[0].message);
      }
      }   
      ); 
  }

  errorValidTarifa(){
    if(this.tarifa.invalid){
      return 'A tarifa deve ter no mínimo 1 caracteres.'
    }
    return false
  }

  errorValidValor(){
    if(this.tarifa.invalid){
      return 'O valor deve ter no mínimo 2 caracteres.'
    }
    return false
  }

}