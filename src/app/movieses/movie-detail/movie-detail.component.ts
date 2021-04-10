import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  // constructor(private route:ActivatedRoute, private movieService:MoviesService) { }

   selectedProduct;
   imageBaseUrl='https://image.tmdb.org/t/p/w500';

  // ngOnInit(){
  //   // this.route.paramMap.subscribe(params=>{
  //   //   let id=+params.get('id');
  //   //   console.log(id);
  //   //  this.movieService.getPopularMovieDetail(id).subscribe(ff=>{this.selectedProduct=ff})
  //   //   console.log(this.selectedProduct);

  //   let id=+this.route.snapshot.paramMap.get('id');
  //     console.log(id);
  //     //  this.movieService.getPopularMovieDetail(id).subscribe(ff=>{this.selectedProduct=ff});
  //   }

  constructor(private route: ActivatedRoute,private movieService:MoviesService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params=> {
        let id = +params.get('id');
          this.movieService.getPopularMovieDetail(id).subscribe(i=>{this.selectedProduct=i,console.log('datadsfs:',i)})

      })
  }
  }

