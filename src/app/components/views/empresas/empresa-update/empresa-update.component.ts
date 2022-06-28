import { EmpresaService } from './../../../../services/empresa.service';
import { Empresa } from './../../../../models/empresa';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresa-update',
  templateUrl: './empresa-update.component.html',
  styleUrls: ['./empresa-update.component.scss']
})
export class EmpresaUpdateComponent implements OnInit {

  cod_emp = ''

  empresa: Empresa = {
    cod: '',
    nome: ''
  }

  nome = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
              private service: EmpresaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_emp = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
    console.log(this.cod_emp)
  }

  findByCod(): void{
    this.service.findByCod(this.cod_emp).subscribe(resposta => {
      this.empresa = resposta;
    }) 
  }

  update():void{
    this.service.update(this.empresa).subscribe(resposta => {
      this.router.navigate(['empresas'])
      this.service.message('Empresa Atualizada com Sucesso!')
    })
  }

  errorValidNome(){
    if(this.nome.invalid){
      return 'O nome da Empresa deve ter no minimo 3 caracteres.'
    }
    return false
  }

}
