import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.css']
})
export class EnergiaComponent{

   pessoas: number = 0;
   comodos: number = 0;
   maquinaLavar: string = 'Não';
   secadora: string = 'Não';
   qtdTvs: number = 0;
   qtdComputadores: number = 0;

  // kWh e reais
  valorConsumo: number = 0;
  valorConta: number = 0;
  tarifa: number = 0.62854;

  // métodos para calcular gastos de energia
  calcularTotalConsumo(): void {
    let consumoBanho = this.pessoas * 18;
    let consumoMaquinaLavar = this.maquinaLavar === 'Sim' ? 18:0;
    let consumoSecadora = this.secadora === 'Sim' ? 10:0;
    let consumoLampada = this.comodos * 13.5;
    let consumoTv = this.qtdTvs * 14.4;
    let consumoComputador = this.qtdComputadores * 27;

    this.valorConsumo = consumoBanho + consumoMaquinaLavar + consumoSecadora + consumoLampada + consumoTv + consumoComputador; 
  }

  calcularTotalGasto(): void {
    let valorBanho = this.pessoas * 11.68;
    let valorMaquinaLavar = this.maquinaLavar === 'Sim' ? 11.68:0;
    let valorSecadora = this.secadora === 'Sim' ? 6.49:0;
    let valorLampada = this.comodos * 8.76;
    let valorTv = this.qtdTvs * 9.34;
    let valorComputador = this.qtdComputadores * 17.52;

    this.valorConta = (valorBanho + valorMaquinaLavar + valorSecadora + valorLampada + valorTv + valorComputador) * this.tarifa;
  }  
}
