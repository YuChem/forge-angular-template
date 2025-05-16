import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@eureka/auth-intercept-lib';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private http: CustomHttpClient) {this.http = new CustomHttpClient();
  }

  getAssets(): Observable<any> {
    return this.http.get<any>('');
  }
}