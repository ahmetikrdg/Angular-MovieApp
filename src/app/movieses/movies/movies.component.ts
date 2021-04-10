import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MoviesService, private route:ActivatedRoute) { }

  posts;
  // pager:Pager;
  // totalRecors:number;
  // page:number=1;
  ids:number;
  imageBaseUrl='https://image.tmdb.org/t/p/w500';
  ss:number=2;

  triggerNext(){
    ++this.ss;
    this.ngOnInit();
  }

  triggerPrevious(){
    this.ss--;
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{this.ids=+params.get('s')});
    console.log(this.ids);
    this.getMoviesList(this.ids)
    // this.movieService.getPopularMovies(5).subscribe(response=>{this.posts=response['results'],
    // console.log('data:',response['results'])
    // this.totalRecors=this.posts.lenght+10;
    // // this.pager=this.getPager(this.posts.length);
    // });
  }

  getMoviesList(ids):Observable<any>{
    console.log('metod list'+ids);
    return of( this.movieService.getPopularMovies(ids).subscribe(response=>{this.posts=response['results']}));
  }
  // gelen(a)
  // {
  //   console.log(a);
  // }

  // getPager(totalItem: number, pageSize: number =1, currentPage: number = 1): Pager {
  //   let pager = new Pager();
  //   pager.pageSize = 20;//20/2.5
  //   pager.currentPage = currentPage;// o anki sayfa bilgisi
  //   for (let i = 1; i <= Math.ceil(20 / 20+this.total); i++)
  //     pager.pageList.push(i);
  //   return pager;
  // }

  // setPage(page: number) {
  //   this.pager.currentPage = page;
  //   this.total=this.total+this.tick;
  // }

}


