import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  text: string= "";

  results: string[] = [];

  constructor( private router: Router, private movieService : MoviesService) { }

  ngOnInit(): void {
  }

 

  search(event : any) {
    console.log(event?.query)
    this.movieService.searchMovie(event.query).subscribe((res :any) => {
      console.log(res, "search")
      let filterTitle = res.results.map((data : any) => data.name)
      this.results = filterTitle;

    })
  }

  findbyId(id : string) {
    let filterName = this.results.filter((data: any) => data.title.toLowerCase() == this.text.toLowerCase())
    console.log(filterName)
    if(this.text){
      // this.router.navigate(['/movie/' + id]);

    }
   
  }

}
