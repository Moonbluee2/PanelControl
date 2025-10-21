import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
