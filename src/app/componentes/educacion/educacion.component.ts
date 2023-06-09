import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacionLista:any;

  constructor(private datosPortfolio:PortfolioService){}


  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.educacionLista=data.educacion;
    })
  }
}
