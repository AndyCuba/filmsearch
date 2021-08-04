import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type MovieType = {
    id: string, 
    image: string, 
    title: string, 
    description: string
};

type MoviesDataType = MovieType[] | null;

@Injectable()
export class DataService{

    moviesData: MoviesDataType = null;
    constructor(private http: HttpClient){};
      
    getMoviesData(searchfield: string) {
        this.http.get(`https://imdb-api.com/API/Search/k_ejd9uvok/${searchfield}`)
            .subscribe((data:any) => this.moviesData = data.results);
    };

    getMovie(id: string | null): MovieType | undefined {
        if(id) {
            return this.moviesData?.filter(film => film.id.includes(id))[0];
        } else { return undefined }
    };

    addData(newFilms: MoviesDataType) {
          
        this.moviesData = newFilms;
    };
};