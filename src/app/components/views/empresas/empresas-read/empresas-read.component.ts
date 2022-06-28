import { EmpresaService } from "./../../../../services/empresa.service";
import { Empresa } from "./../../../../models/empresa";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";

@Component({
  selector: "app-empresas-read",
  templateUrl: "./empresas-read.component.html",
  styleUrls: ["./empresas-read.component.scss"],
})
export class EmpresasReadComponent implements AfterViewInit {
  empresas: Empresa[] = [];

  displayedColumns: string[] = ["cod", "nome", "acoes"];
  dataSource = new MatTableDataSource<Empresa>(this.empresas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: EmpresaService,
    private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((res) => {
      this.empresas = res;
      console.log(this.empresas);
      this.dataSource = new MatTableDataSource<Empresa>(this.empresas);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    });
  }

  navigateToCreate():void{
    this.router.navigate(['empresas/create'])
  }

}
