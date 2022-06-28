import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passagem } from 'src/app/models/passagem';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-passagens-delete',
  templateUrl: './passagens-delete.component.html',
  styleUrls: ['./passagens-delete.component.scss']
})
export class PassagensDeleteComponent implements OnInit {

  cod_pass = ''

  passagem: Passagem = {
    cod: '',
    tarifa: '',
    valor: '',
    data: ''
  }

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

  deletar():void{
    this.service.delete(this.cod_pass).subscribe(resposta => {
      this.router.navigate(['passagens'])
      this.service.message('Passagem Deletada com Sucesso!')
    }, err => {
      this.service.message('Não é possivel Deletar a Passagem, a mesma possui vinculo a uma Pessoa.')
    })
  }

}
