import { EmpresaService } from './../../../../services/empresa.service';
import { Empresa } from './../../../../models/empresa';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.scss']
})
export class EmpresaCreateComponent implements OnInit {

  empresa: Empresa = {
    cod: '',
    nome: ''
  }

  nome = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
              private service: EmpresaService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['empresas'])
  }

  create():void{
    this.service.create(this.empresa).subscribe(arg => {
      this.router.navigate(['empresas'])
      this.service.message('Empresa cadastrada com Sucesso!')
      }, err=>{
        console.log(err);
        if(err.error.error.match('validacao')) {
        this.service.message(err.error.error);
      }else if(err.error.errors[0].match('vazio')){
        this.service.message(err.error.errors[0].message);
      }
      }   
      ); 
  }

  errorValidNome(){
    if(this.nome.invalid){
      return 'O nome da Empresa deve ter no minimo 3 caracteres.'
    }
    return false
  }
}
