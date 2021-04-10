import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MoviesComponent } from "./movies/movies.component";
import { RatedComponent } from "./rated/rated.component";

const appRoutes:Routes=[
    // {
    //     path:'movies',component:MoviesComponent,children:[
    //         {path:':id',component:MovieDetailComponent},
    //     ]

    // }
    {path:'',redirectTo:'/',pathMatch:'full'},
    // {path:'',component:MoviesComponent},
    {path:'movies/:s',component:MoviesComponent},
    {path:'movie/:id',component:MovieDetailComponent},
    {path:'moviesRated',component:RatedComponent}
]

@NgModule({
  imports:[
     RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule{
}
