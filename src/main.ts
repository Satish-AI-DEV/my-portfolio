import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withHashLocation())],
});