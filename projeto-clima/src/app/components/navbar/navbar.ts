import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GeocodingService, GeocodingResult } from '../../services/geocoding';
import { LocalizacaoService } from '../../services/localizacao';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  cidade: string = '';
  erro: string | null = null;
  carregando = false;

  constructor(
    private geocodingService: GeocodingService,
    private localizacaoService: LocalizacaoService
  ) {}

buscarCidade() {
  if (!this.cidade.trim()) return;

  this.geocodingService.buscarCidade(this.cidade).subscribe({
    next: res => {
      const cidade = res.results?.[0];
      if (!cidade) return;

      this.localizacaoService.setLocalizacao({
        nome: `${cidade.name}, ${cidade.country}`,
        latitude: cidade.latitude,
        longitude: cidade.longitude
      });
    }
  });
}

}
