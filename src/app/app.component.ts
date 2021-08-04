import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'filmsearch';
  data: string[] = [];

  onRecieveData(recieved: any) {
    this.data = [...this.data, ...recieved]
    console.log(this.data)
  }
};
