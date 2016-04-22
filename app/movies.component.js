System.register(['angular2/core', 'angular2/router', './movie-detail.component', './movie.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, movie_detail_component_1, movie_service_1;
    var MoviesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movie_detail_component_1_1) {
                movie_detail_component_1 = movie_detail_component_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            }],
        execute: function() {
            MoviesComponent = (function () {
                function MoviesComponent(_router, _movieService) {
                    this._router = _router;
                    this._movieService = _movieService;
                }
                MoviesComponent.prototype.getMovies = function () {
                    var _this = this;
                    this._movieService.getMovies().then(function (movies) { return _this.movies = movies; });
                };
                MoviesComponent.prototype.ngOnInit = function () {
                    this.getMovies();
                };
                MoviesComponent.prototype.onSelect = function (movie) { this.selectedMovie = movie; };
                MoviesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['MovieDetail', { id: this.selectedMovie.id }]);
                };
                MoviesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-movies',
                        templateUrl: 'app/movies.component.html',
                        styleUrls: ['app/movies.component.css'],
                        directives: [movie_detail_component_1.MovieDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, movie_service_1.MovieService])
                ], MoviesComponent);
                return MoviesComponent;
            }());
            exports_1("MoviesComponent", MoviesComponent);
        }
    }
});
//# sourceMappingURL=movies.component.js.map