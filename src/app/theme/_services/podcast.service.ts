import { Injectable } from '@angular/core';
import { Podcast } from '../_models/Podcast.class';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PodcastService {
baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.url + 'podcasts/';
   }
  getPodcasts(): Promise<Podcast[]> {
    return this.http.get<Podcast[]>(this.baseUrl).toPromise();
  }
}
