import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MusicService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.url + 'music/';
  }
  getMusicList(): Promise<any> {
    return this.http.get<any>(this.baseUrl).toPromise();
  }

}
