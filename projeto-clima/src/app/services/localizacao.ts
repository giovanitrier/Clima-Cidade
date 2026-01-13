import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Localizacao {
  nome: string;
  latitude: number;
  longitude: number;
}

@Injectable({ providedIn: 'root' })
export class LocalizacaoService {

  private localizacaoSubject = new BehaviorSubject<Localizacao | null>(null);

  localizacao$ = this.localizacaoSubject.asObservable();

  setLocalizacao(localizacao: Localizacao) {
    console.log('📍 Localização atualizada:', localizacao);
    this.localizacaoSubject.next(localizacao);
  }

  getLocalizacaoAtual() {
    return this.localizacaoSubject.value;
  }
}
