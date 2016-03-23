import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component ({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent {
  movies: Movie[] = [];

  constructor(
    private _router: Router,
    private _movieService: MovieService) {
  }

  ngOnInit() {
    this._movieService.getMovies()
      .then(movies => this.movies = movies.slice(1,5));
  }

  gotoDetail(movie: Movie) {
    let link = ['MovieDetail', { id: movie.id }];
    this._router.navigate(link);
  }
}
