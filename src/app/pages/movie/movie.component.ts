import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie : Movie | null = null

  constructor( private route : ActivatedRoute, private movieService : MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log(id)
      this.getMovieDetails(id)
    })
  }

  getMovieDetails(id:string) {
    this.movieService.getMovie(id).subscribe((res :any) => {
      this.movie = res
      console.log(res, "res")
    })
  }

}
