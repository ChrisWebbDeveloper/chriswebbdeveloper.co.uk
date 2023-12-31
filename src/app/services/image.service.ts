import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  exts: string[] = [ 'jpg', 'gif', 'png'];
  currentIndex: number = 0;

  constructor(private http: HttpClient) {
  }

  public getImage(name: string): Observable<string | undefined> {
    let fileName: string = name.toLowerCase().replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '')
    const imgUrl = `../../assets/images/${fileName}.${this.exts[this.currentIndex]}`;

    return this.http.get(imgUrl, { observe:'response', responseType:'blob' }).pipe(
      map(val => {
        return imgUrl;
      }),
      catchError(err => {
        this.currentIndex++;
        if (this.currentIndex < this.exts.length - 1) return this.getImage(name);
        else return of(undefined);
      })
    );
  }
}
