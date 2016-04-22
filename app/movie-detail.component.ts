import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
  selector: 'my-movie-detail',
  templateUrl: 'app/movie-detail.component.html',
  styleUrls: ['app/movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private _movieService: MovieService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._movieService.getMovie(id)
      .then(movie => this.movie = movie);
  }

  goBack() {
    window.history.back();
  }
}
