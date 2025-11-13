import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environments/ennvironment';


@Injectable({
  providedIn: 'root',
})
export class AiService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getBotReply(userInput: string): Observable<{ reply: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { message: userInput };

    return this.http.post<{ reply: string }>(this.apiBaseUrl, body, { headers });
  }
}
