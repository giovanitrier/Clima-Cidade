import { Injectable } from '@angular/core';
// Importa o decorador Injectable do Angular para criar um serviço injetável.
//Um serviço injetável é uma classe que pode ser injetada em outros componentes ou serviços usando o sistema de injeção de dependência do Angular.
// Para usar-lo, você precisa importar o decorador Injectable do módulo @angular/core e aplicá-lo à classe do serviço.

import {environment} from '../environments/environment'

import { HttpClient } from '@angular/common/http';
// Importa o HttpClient do módulo @angular/common/http para fazer requisições HTTP.
import { Observable } from 'rxjs';
// Importa o Observable da biblioteca RxJS para lidar com operações assíncronas.

import { PrevisaoResponse } from '../models/previsao-response';

@Injectable({
  providedIn: 'root', // Isso significa que o serviço estará disponível em toda a aplicação como um singleton.
})

export class Clima {

    private readonly baseURL = `${environment.apiUrl}/previsao/14-dias`; // URL base da API de previsão do tempo.
  constructor(private http: HttpClient) {}
  // Injeta o HttpClient no construtor para permitir que o serviço faça requisições HTTP.

    obterPrevisaoPorCoordenadas(
      lat: number,
      lon: number
    ): Observable<PrevisaoResponse> {
      return this.http.get<PrevisaoResponse>(
        `${this.baseURL}?latitude=${lat}&longitude=${lon}`
      );
    }
  }


