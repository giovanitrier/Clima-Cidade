import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Biblioteca do Angular que fornece diretivas e serviços comuns como ngIf e ngFor
import { RouterModule } from '@angular/router'; // Biblioteca do Angular que permite o roteamento dos componentes

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
