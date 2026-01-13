import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';


appConfig.providers = [
  ...(appConfig.providers || []),
  provideHttpClient(),
];
// Adiciona o provedor HttpClient à configuração da aplicação para permitir requisições HTTP em toda a aplicação.

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
