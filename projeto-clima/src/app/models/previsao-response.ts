import { PrevisaoTempo } from './PrevisaoTempo';

export interface CurrentWeather {
  temperatura: number;
  temperaturaMaxima:number;
  temperaturaMinima:number;
  umidade:number;
  vento: number;
  condicao: string;
  imagem: string;
  dataHora: string;
}

export interface PrevisaoResponse {
  currentWeather: CurrentWeather;
  forecast: PrevisaoTempo[];
}
