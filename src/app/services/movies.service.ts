import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  popularMovies='';
  popularMoviesDetail="";
  constructor(private http:HttpClient) { }

  getPopularMovies(id)
  {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=be90aa86f797869df817386882991c5b&language=tr&page="+id);
  }

  getPopularMovieDetail(id){
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=be90aa86f797869df817386882991c5b&language=tr");
  }

  MoiveSearch(q){
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=be90aa86f797869df817386882991c5b&language=tr&query="+q+"&page=1&include_adult=false");
  }


  moviesCategory(){
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=be90aa86f797869df817386882991c5b&language=tr");
  }

  moviesCategoryDetail(id){
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/recommendations?api_key=be90aa86f797869df817386882991c5b&language=tr&page=1");
  }


}
