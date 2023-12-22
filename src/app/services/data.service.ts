import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Object> {
    return this.http.get(environment.dataUrl);
  }
}
