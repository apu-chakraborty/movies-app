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

  movie : Movie | null = null;
  movieimages : any =  [];
  movievideos : any =  []
  recomemdedVideos : any =  []

  constructor( private route : ActivatedRoute, private movieService : MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log(id)
      this.getMovieDetails(id)
      this.getMovieDetailsImages(id)
      this.getMovieDetailsVideos(id)
    })

   
  }

  getMovieDetails(id:string) {
    this.movieService.getMovie(id).subscribe((res :any) => {
      this.movie = res
      console.log(res, "res")
    })
  }


  getMovieDetailsImages(id:string) {
    this.movieService.getMovieImages(id).subscribe((res :any) => {
      this.movieimages = res.posters.slice(0, 8)
      console.log(res.posters, "res images")
    })
  }

  getMovieDetailsVideos(id:string) {
    this.movieService.getMovieVideos(id).subscribe((res :any) => {
      this.movievideos = res.results
      console.log(res, "res videos")
    })
  }


  

  

}
