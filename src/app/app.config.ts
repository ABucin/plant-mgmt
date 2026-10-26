import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';

registerLocaleData(en);

const ngZorroConfig: NzConfig = {
    theme: {
        primaryColor: '#4EAD8A', // Matches $cta-primary
    },
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideNzConfig(ngZorroConfig),
        provideRouter(routes),
        provideNzI18n(en_US),
    ],
};
