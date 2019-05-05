import { Component } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'torre';
  constructor(private globals: Globals){
    console.log("el nombnres ",this.globals.name);
  }
}
