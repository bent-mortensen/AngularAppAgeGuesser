import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent implements OnInit {
  private Age:number;
  ShowAge = '';

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.Age = this.dataService.GetAge()
    this.ShowAge = "" + this.Age;
  }

  GoToTakePicture(){
    this.router.navigate(["/capture-image"]);
  }
  GoToHome(){
    this.router.navigate(["/home"]);
  }
  
}
