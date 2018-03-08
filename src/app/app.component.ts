import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  constructor(
    private router: Router
  ){}


  ngAfterViewInit() {
    this.router.navigate(["/splashscreen"]);
    setTimeout(() => {      
      this.router.navigate(["/home"]);
    }, 3000);
   }
}
