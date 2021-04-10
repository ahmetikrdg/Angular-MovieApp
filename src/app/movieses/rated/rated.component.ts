import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.css']
})
export class RatedComponent implements OnInit {

  constructor(private movieService:MoviesService) { }
  rated;
  category;
  imageBaseUrl='https://image.tmdb.org/t/p/w500';
  catdetail;
  values:Array<any>= [];

  trigger(q){
    this.ngOnInit;
    this.categoryDetail(q);
  }


  ngOnInit(): void {
    this.categoryDetail(28);

    this.movieService.moviesCategory().subscribe(i=>
      {
        i['genres'].forEach(element => {
          if (element.id!=9648 && element.id!=37 && element.id!=16 && element.id!=36 && element.id!=27 && element.id!=37 && element.id!=53) {
            this.values.push(element);
          }
        });
         this.category=this.values;
    });

  }

  categoryDetail(cid):Observable<any>{
   return of(this.movieService.moviesCategoryDetail(cid).subscribe(i=>{this.catdetail=i['results']}));
  }

}
