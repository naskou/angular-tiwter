import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  SetToken(token) {
    this.cookieService.set('tiwter_token', token);
  }

  GetToken() {
    return this.cookieService.get('tiwter_token');
  }

  DeleteToken() {
    this.cookieService.delete('tiwter_token');
  }
}
