import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-recommended-videos',
  templateUrl: './recommended-videos.component.html',
  styleUrls: ['./recommended-videos.component.scss']
})
export class RecommendedVideosComponent implements OnInit {

  @Input() items: Movie[] = []
  @Input() title: string = ""

  recomemdedVideos: any = []

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getRecommendedVideos(id)
    })


  }


  getRecommendedVideos(id: string) {
    this.movieService.getRecommendedVideos(id).subscribe((res: any) => {
      this.recomemdedVideos = res.results.slice(0, 6)
    })
  }

}
