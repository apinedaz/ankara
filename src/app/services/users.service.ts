import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService
{
  private apiUrl = 'api/users'

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  public getUserById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id=${id}`);
  }
}
