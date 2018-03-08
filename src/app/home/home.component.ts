import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  GoToTakePicture(){
    this.router.navigate(["/capture-image"]);
  }
  GoToAbout(){
    this.router.navigate(["/about"]);
  }

}
