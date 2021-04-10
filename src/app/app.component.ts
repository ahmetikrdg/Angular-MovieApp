import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // templateUrl: ['../app.component.html','/app.search.html'],

})
export class AppComponent {
  title = 'movieapp';
   searchData;

  constructor(private movieService:MoviesService,private router:Router) {
  }

  search(q){
    console.log(q);
    this.movieService.MoiveSearch(q).subscribe(i=>{this.searchData=i['results'],console.log(i['results'])});
    // this.router.navigate(['/search'],{queryParams:q});
    // this.searchData=q;
  }

}
