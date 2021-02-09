import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('https://run.mocky.io/v3/05d9eee3-67ef-41c5-91ec-67fb25b58970', { responseType: 'text' });
  }

  getAbout() {
    return this.http.get('https://run.mocky.io/v3/c0d4d215-ce3c-47d0-82d4-2c5c4a38c6da', { responseType: 'text' });
  }
}