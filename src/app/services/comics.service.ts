import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService 
{
  private apiUrl = 'api/comics'

  constructor(private http: HttpClient) { }

  public getComics(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
