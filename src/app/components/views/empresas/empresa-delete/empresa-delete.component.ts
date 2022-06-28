import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa-delete',
  templateUrl: './empresa-delete.component.html',
  styleUrls: ['./empresa-delete.component.scss']
})
export class EmpresaDeleteComponent implements OnInit {

  cod_emp = ''

  empresa: Empresa = {
    cod: '',
    nome: ''
  }


  constructor(private router: Router,
              private service: EmpresaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_emp = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
    console.log()
  }

  findByCod(): void{
    this.service.findByCod(this.cod_emp).subscribe(resposta => {
      this.empresa = resposta;
    }) 
  }

  deletar():void{
    this.service.delete(this.cod_emp).subscribe(resposta => {
      this.router.navigate(['empresas'])
      this.service.message('Empresa Deletada com Sucesso')
    }, err => {
      this.service.message('Não é possivel Deletar a Empresa, a mesma possui vinculo a uma Pessoa.')
    })
  }

}

