import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Passagem } from 'src/app/models/passagem';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-passagens-update',
  templateUrl: './passagens-update.component.html',
  styleUrls: ['./passagens-update.component.scss']
})
export class PassagensUpdateComponent implements OnInit {

  cod_pass = ''

  passagem: Passagem = {
    cod: '',
    tarifa: '',
    valor: '',
    data: ''
  }

  tarifa = new FormControl('', [Validators.minLength(1)])
  valor = new FormControl('', [Validators.minLength(3)])

  constructor(private router: Router,
    private service: PassagemService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_pass = this.route.snapshot.paramMap.get('cod')!
    this.findByCod();
  }

  findByCod(): void{
    this.service.findByCod(this.cod_pass).subscribe(res => {
      this.passagem = res;
    }) 
  }

  update():void{
    this.service.update(this.passagem).subscribe(res => {
      this.router.navigate(['passagens'])
      this.service.message('Passagem Atualizada com Sucesso!')
    })
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
