import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getMovies() {
   return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=42695c627805e8f8c33095075b4b8a4d&region=US&page=1");
  }
}
