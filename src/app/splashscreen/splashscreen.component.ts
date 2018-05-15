import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashScreenComponent implements OnInit {
  title = 'Guess My Age';
  constructor() { }
 
  ngOnInit() { 
  }

}
