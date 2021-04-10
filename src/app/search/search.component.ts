import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService:MoviesService,private route: ActivatedRoute) { }
  searchs;

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params=> {
    //     let id = +params.get('q');
    //     this.movieService.MoiveSearch(id).subscribe(i=>{this.searchs=i['results'],console.log(i['results'])});
    //   })
  }
  /*
  gelen(searchs){
    console.log(searchs);
    this.movieService.MoiveSearch(searchs).subscribe(i=>{this.searchs=i['results'],console.log(i['results'])});

  }

  */
}
