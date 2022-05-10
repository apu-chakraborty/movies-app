import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "42695c627805e8f8c33095075b4b8a4d"

  constructor(private http: HttpClient) { }


  getMovies(movieType : string = "upcoming") {
   return this.http.get(`${this.baseUrl}/movie/${movieType}?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}

