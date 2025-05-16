import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AssetsListComponent } from './app/assets-list.component';
import { CustomHttpClient } from '@eureka/auth-intercept-lib';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AssetsListComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-assets-list></app-assets-list>
  `,
})
export class App {
  name = 'Angular';
  tenantApiUrl = environment.tenantApiUrl;
  tenantId = environment.tenantId;
}

bootstrapApplication(App, {
  providers: [CustomHttpClient]
});


