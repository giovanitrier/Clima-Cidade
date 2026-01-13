import { Component } from '@angular/core'; //Biblioteca principal do Angular para criar componentes
import { RouterOutlet } from '@angular/router'; // Biblioteca do Angular para gerenciar rotas e navegação entre componentes
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projeto-clima-semanal';
}
