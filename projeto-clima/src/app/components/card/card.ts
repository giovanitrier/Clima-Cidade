import { Component, OnInit, ChangeDetectorRef, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrevisaoTempo } from '../../models/PrevisaoTempo';
import { CurrentWeather, PrevisaoResponse } from '../../models/previsao-response';
import { Clima } from '../../services/clima';
import { LocalizacaoService } from '../../services/localizacao';

registerLocaleData(localePt); // registra o locale PT

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' } // define o locale para PT-BR
  ]
})
export class Card implements OnInit {

  nomeCidade = '';

  climaAtual?: CurrentWeather;
  previsao14Dias: PrevisaoTempo[] = [];

  indiceSelecionado = 0;
  carregando = true;
  erro: string | null = null;

  constructor(
    private climaService: Clima,
    private localizacaoService: LocalizacaoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.definirLocalizacaoInicial();

    this.localizacaoService.localizacao$.subscribe(loc => {
      if (!loc) return;

      this.nomeCidade = loc.nome;
      this.buscarPrevisao(loc.latitude, loc.longitude);
    });
  }

  private definirLocalizacaoInicial() {
    if (!navigator.geolocation) {
      this.usarLocalizacaoPadrao();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        this.localizacaoService.setLocalizacao({
          nome: 'Sua localização',
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      },
      () => this.usarLocalizacaoPadrao()
    );
  }

  private usarLocalizacaoPadrao() {
    this.localizacaoService.setLocalizacao({
      nome: 'São Paulo, BR',
      latitude: -23.55,
      longitude: -46.63
    });
  }

  private buscarPrevisao(lat: number, lon: number) {
    this.carregando = true;
    this.erro = null;

    this.climaService.obterPrevisaoPorCoordenadas(lat, lon).subscribe({
      next: (res: PrevisaoResponse) => {
        this.climaAtual = res.currentWeather;
        this.previsao14Dias = res.forecast;
        this.imagem = this.condicaoParaImagem[this.climaAtual.condicao]; //
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Erro ao obter clima';
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

imagem: string = '';

// mapeamento de condição -> imagem
public condicaoParaImagem: { [key: string]: string } = {
  'Céu Limpo': 'assets/Ensolarado.png',
  'Céu Majoritariamente Limpo': 'assets/Ensolarado.png',
  'Parcialmente Nublado': 'assets/solenuvens.png',
  'Nublado': 'assets/solenuvens.png',
  'Neblina': 'assets/neblina.png',
  'Geada': 'assets/neblina.png',
  'Garoa': 'assets/chuva_moderada.png',
  'Garoa Congelada': 'assets/chuva_moderada.png',
  'Chuva Leve': 'assets/chuva_moderada.png',
  'Chuva Moderada': 'assets/chuva_moderada.png',
  'Chuva Intensa': 'assets/chuva_moderada.png',
  'Chuva Congelada Leve': 'assets/chuva_moderada.png',
  'Chuva congelada Intensa': 'asset//huva_moderada.png',
  'Queda de neve Leve': 'assets/nevando.png',
  'Queda de Neve Moderada': 'assets/nevando.png',
  'Queda de Neve Intensa': 'assets/nevando.png',
  'Queda de Grãos de Neve': 'assets/nevando.png',
  'Queda de Neve Passageira Leve': 'assets/nevando.png',
  'Queda de Neve Passageira Intensa': 'assets/nevando.png',
  'Chuva Passageira Leve': 'assets/chuva_moderada.png',
  'Chuva Passageira Moderada': 'assets/chuva_moderada.png',
  'Chuva Passageira Intensa': 'assets/chuva_moderada.png',
  'Tempestade': 'assets/tempestade.png',
  'Tempestade com granizo.': 'assets/tempestade.png',
  'Indeterminado': 'assets/Ensolarado.png', // padrão
};

  diasDaSemanaPT: { [key: string]: string } = {
    'Mon': 'Seg',
    'Tue': 'Ter',
    'Wed': 'Qua',
    'Thu': 'Qui',
    'Fri': 'Sex',
    'Sat': 'Sáb',
    'Sun': 'Dom'
  };

  // método para converter
  getDiaEmPT(diaEEE: string): string {
    return this.diasDaSemanaPT[diaEEE] || diaEEE;
  }

  onDiaSelecionado() {
    this.cdr.detectChanges();
  }
}
