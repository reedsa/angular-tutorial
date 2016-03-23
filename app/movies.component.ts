import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Movie } from './movie';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-movies',
  templateUrl: 'app/movies.component.html',
  styleUrls: ['app/movies.component.css'],
  directives: [MovieDetailComponent]
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor(
    private _router: Router,
    private _movieService: MovieService) {
  }

  getMovies() {
    this._movieService.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit() {
    this.getMovies();
  }

  onSelect(movie: Movie) { this.selectedMovie = movie; }

  gotoDetail() {
    this._router.navigate(['MovieDetail', { id: this.selectedMovie.id }]);
  }
}
