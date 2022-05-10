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

  constructor(private movieService : MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies('upcoming').subscribe((res :any) => {
      this.upcomingMovies = res.results
      // console.log(res)
    });

    this.movieService.getMovies('popular').subscribe((res :any) => {
      this.popularMovies = res.results
    })

  }

}
