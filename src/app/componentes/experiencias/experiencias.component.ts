import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experienciasLista:any;

  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciasLista=data.experiencias;
    });
  }
}
