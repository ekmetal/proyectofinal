import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html', 
  styleUrls: ['./acercade.component.css'],
})

export class AcercadeComponent implements OnInit {
  acercaDeDatos: any;

  constructor(private datosPortfolio:PortfolioService) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.acercaDeDatos = data.acercaDe;
    });
  }
}
