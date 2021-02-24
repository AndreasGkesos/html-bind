import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('https://run.mocky.io/v3/6e024f70-b52e-489b-a0be-960fa80a650a', { responseType: 'json' });
  }

  getAbout() {
    return this.http.get('https://run.mocky.io/v3/c0d4d215-ce3c-47d0-82d4-2c5c4a38c6da', { responseType: 'text' });
  }
}