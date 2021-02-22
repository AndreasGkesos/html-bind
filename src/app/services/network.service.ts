import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('https://run.mocky.io/v3/3a9f73e2-4e31-48e1-a371-037de4cb76d0', { responseType: 'text' });
  }

  getAbout() {
    return this.http.get('https://run.mocky.io/v3/c0d4d215-ce3c-47d0-82d4-2c5c4a38c6da', { responseType: 'text' });
  }
}