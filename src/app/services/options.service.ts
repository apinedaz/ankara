import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService 
{
  private apiUrl = 'api/options'

  constructor(private http: HttpClient) { }

  public getOptions(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
