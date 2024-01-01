import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private exts: string[] = [ 'jpg', 'gif', 'png'];
  private currentIndex: number = 0;

  constructor(private http: HttpClient) {
  }

  private getImgUrl(name: string): string {
    let fileName: string = name.toLowerCase().replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '')
    if (fileName.length > 0) return `../../assets/images/${fileName}.${this.exts[this.currentIndex]}`;
    else return '';
  }

  getImage(name: string): Observable<string | undefined> {
    const imgUrl = this.getImgUrl(name);

    if (imgUrl.length > 0) {
      return this.http.get(imgUrl, {observe: 'response', responseType: 'blob'}).pipe(
        map(val => imgUrl),
        catchError(err => {
          this.currentIndex++;
          if (this.currentIndex < this.exts.length) return this.getImage(name);
          else return of(undefined);
        })
      );
    }
    else return of(undefined);
  }
}
