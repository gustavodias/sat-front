import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cota } from 'src/app/models/cota';
import { Graduacao } from 'src/app/models/graduacao';
import { CotaService } from 'src/app/services/cota.service';
import { GraduacaoService } from 'src/app/services/graduacao.service';

@Component({
  selector: 'app-cotas-update',
  templateUrl: './cotas-update.component.html',
  styleUrls: ['./cotas-update.component.scss']
})
export class CotasUpdateComponent implements OnInit {
  cod_cota = ''

  cota: Cota = {
    cod: '',
    valor: '',
    gradPosto: ''
  }

  graduacoes: Graduacao[] = []

  constructor(private router: Router,
    private service: CotaService,
    private route: ActivatedRoute,
    private serviceGrad: GraduacaoService) { }

    gradPosto = new FormControl('', [Validators.minLength(1)])
    valor = new FormControl('', [Validators.minLength(3)])

  ngOnInit(): void {
    this.cod_cota = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
    this.findAll();
    
  }


  findAll():void{
    this.serviceGrad.findAll().subscribe(res => {
      this.graduacoes = res.content
      console.log(this.graduacoes)
    })
  }

  findByCod(): void{
    this.service.findByCod(this.cod_cota).subscribe(res => {
      this.cota = res;
      this.cota.gradPosto = res.graduacao.posto;
      console.log(res)
    }) 
  }

  update():void{
    this.service.update(this.cota).subscribe(res => {
      console.log(this.gradPosto.value)
     /* this.router.navigate(['cotas'])*/
      this.service.message('Cota Atualizada com Sucesso!')
    })
  }

  errorValidGrad(){
    if(this.gradPosto.invalid){
      return 'O posto deve ter no mínimo 1 caracteres.'
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
