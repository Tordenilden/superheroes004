import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// this file is devided in 3 parts

// called a Decorator - its meta data about data / or close
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// how many things are there in classeS? //2
export class AppComponent {
  title = 'superheroes001';
  // int tal = 5;
  tal:number = 5;
  text:string="I dunno know";
  myArray1:number[] = [];
  myArray2:number[] = [5,10,15];
  myTrue:boolean=true;

}
