import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  upcomingMovies: Movie[] = []
  popularMovies: Movie[] = []
  topRated: Movie[] = []

  constructor(private movieService : MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies('upcoming').subscribe((res :any) => {
      this.upcomingMovies = res.results.slice(0, 5)
      // console.log(res)
    });

    this.movieService.getMovies('popular').subscribe((res :any) => {
      this.popularMovies = res.results.slice(0, 12)
    })

    this.movieService.getMovies('top_rated').subscribe((res :any) => {
      this.topRated = res.results.slice(0, 12)
    })

  }

}
