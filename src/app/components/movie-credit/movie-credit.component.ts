import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-credit',
  templateUrl: './movie-credit.component.html',
  styleUrls: ['./movie-credit.component.scss']
})
export class MovieCreditComponent implements OnInit {

  casting: any = []

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getCredit(id)
    })


  }


  getCredit(id: string) {
    this.movieService.getCastings(id).subscribe((res: any) => {
      // console.log(res.results.cast, "eeeeee")
      this.casting = res.results.cast
    })
  }

}
