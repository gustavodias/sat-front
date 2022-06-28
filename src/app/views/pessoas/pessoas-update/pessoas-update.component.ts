import { PessoaService } from 'src/app/services/pessoa.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { Graduacao } from 'src/app/models/graduacao';
import { Pessoa } from 'src/app/models/pessoa';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GraduacaoService } from 'src/app/services/graduacao.service';

@Component({
  selector: 'app-pessoas-update',
  templateUrl: './pessoas-update.component.html',
  styleUrls: ['./pessoas-update.component.scss']
})
export class PessoasUpdateComponent implements OnInit {
  cod_pessoa = ''

  grad = ''

  pessoa: Pessoa = {
    cod: '',
    tipo: '',
    turma: '',
    ano: '',
    preccp: '',
    nome: '',
    nomeGuerra: '',
    endereco: '',
    percurso: '',
	  graduacao: '',
    empresa: ''
  }

  graduacoes: Graduacao[] = [];
  empresas: Empresa[] = [];

  tipo = new FormControl('', [Validators.minLength(1)])
  turma = new FormControl('', [Validators.minLength(3)])
  ano= new FormControl('', [Validators.minLength(3), Validators.maxLength(4), Validators.max(2100)])
  preccp= new FormControl('', [Validators.minLength(11), Validators.maxLength(11)])
  nome = new FormControl('', [Validators.minLength(3)])
  nomeGuerra = new FormControl('', [Validators.minLength(3)])
  endereco = new FormControl('', [Validators.minLength(3)])
  percurso = new FormControl('', [Validators.minLength(3)])
  graduacao = new FormControl('', [Validators.minLength(2), Validators.required])
  empresa = new FormControl('', [Validators.minLength(3)])


  constructor(private router: Router,
    private service: PessoaService,
    private route: ActivatedRoute,
    private serviceGrad: GraduacaoService,
    private serviceEmp: EmpresaService) { }

  ngOnInit(): void {
    this.cod_pessoa = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
    this.findAllGrad();
    this.findAllEmp();
  }

 


  findAllGrad():void{
    this.serviceGrad.findAll().subscribe(res => {
      this.graduacoes = res.content
     // console.log(this.pessoa.graduacao.cod)
    })
  }

  findAllEmp():void{
    this.serviceEmp.findAll().subscribe(res => {
      this.empresas = res
    })
  }

  findByCod(): void{
    this.service.findByCod(this.cod_pessoa).subscribe(res => {
      this.pessoa = res;
      this.pessoa.graduacao.cod = res.graduacao.cod;
      this.grad = this.pessoa.graduacao.posto
      this.graduacao.setValue(this.pessoa.graduacao.posto)
      console.log(this.graduacao.value)
    }) 
  }

  puxarGrad():void{
    this.graduacao.setValue(this.pessoa.graduacao.posto)
    console.log(this.grad)
  }

  update():void{
    this.pessoa.empresa = this.empresa.value
    this.pessoa.graduacao = this.graduacao.value
    console.log(this.pessoa.graduacao)
    this.service.update(this.pessoa).subscribe(res => {
      console.log(this.pessoa)
      this.router.navigate(['pessoas'])
      this.service.message('Pessoa Atualizada com Sucesso!')
    })
  }

  errorValidGraduacao(){
    if(this.graduacao.invalid){
      return 'A Graduação deve ter no mínimo 2 caracteres.'
    }
    return false
  }

  errorValidTipo(){
    if(this.tipo.invalid){
      return 'O tipo deve ter no mínimo 2 caracteres.'
    }
    return false
  }

  errorValidTurma(){
    if(this.turma.invalid){
      return 'A Turma deve ter no mínimo 4 caracteres.'
    }
    return false
  }

  errorValidAno(){
    if(this.ano.invalid){
      return 'O Ano deve ter no mínimo 4 caracteres.'
    }
    return false
  }

  errorValidPreccp(){
    if(this.preccp.invalid){
      return 'O Preccp deve ter 11 caracteres.'
    }
    return false
  }

  errorValidGuerra(){
    if(this.nomeGuerra.invalid){
      return 'O Nome de Guerra deve ter no mínimo 2 caracteres.'
    }
    return false
  }

  errorValidNome(){
    if(this.nome.invalid){
      return 'O Nome deve ter no mínimo 4 caracteres.'
    }
    return false
  }

  errorValidEndereco(){
    if(this.endereco.invalid){
      return 'O Ano deve ter no mínimo 2 caracteres.'
    }
    return false
  }

  errorValidPercurso(){
    if(this.percurso.invalid){
      return 'O Percurso deve ter no mínimo 4 caracteres.'
    }
    return false
  }

  errorValidEmpresa(){
    if(this.empresa.invalid){
      return 'A Empresa deve ter no mínimo 2 caracteres.'
    }
    return false
  }
}
