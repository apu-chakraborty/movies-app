import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { MovieCredits } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "42695c627805e8f8c33095075b4b8a4d"

  constructor(private http: HttpClient) { }


  getMovies(movieType : string = "upcoming") {
   return this.http.get(`${this.baseUrl}/movie/${movieType}?api_key=${this.apiKey}&language=en-US&page=1&include_video=true`);
  }

  getMovie(id : string) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
   }

   getMovieImages(id : string) {
    return this.http.get(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
   }

   getMovieVideos(id : string) {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`);
   }

   getRecommendedVideos(id : string) {
    return this.http.get(`${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`);
   }

   getCastings(id : string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
   }
}

