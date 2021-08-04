import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent { 

    
    searchfield: string = '';
    data: any[] | null = null;
    
    constructor(private dataService: DataService){};

    ngDoCheck(){
        this.data = this.dataService.moviesData;
    };

    getFilms() {
        this.dataService.getMoviesData(this.searchfield);
    };
};