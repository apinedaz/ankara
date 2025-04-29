import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorsService 
{
  private apiUrl = 'api/editors'

  constructor(private http: HttpClient) { }

  public getEditors(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
