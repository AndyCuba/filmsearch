import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService, MovieType } from '../services/data.service';

@Component({
    selector: 'about-app',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent { 

    id: string | null = null;
    movie: MovieType | undefined;

    private subscription: Subscription;

    constructor(activateRoute: ActivatedRoute, private dataService: DataService) {        
        this.subscription = activateRoute.params.subscribe(params => this.id=params['id']);
        this.movie = dataService.getMovie(this.id);
    };

    ngOnChanges() {
        console.log(this.movie)
    };

    
};