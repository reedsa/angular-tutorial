import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MovieService } from './movie.service';
import { DashboardComponent } from './dashboard.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Movies']">Movies</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    MovieService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesComponent
  },
  {
    path: '/detail/:id',
    name: 'MovieDetail',
    component: MovieDetailComponent
  }
])
export class AppComponent {
  title = 'Movies';
}
