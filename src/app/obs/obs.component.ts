import { Component, OnInit } from '@angular/core';
import { ObsService } from './obs.service.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})



export class ObsComponent implements OnInit {

  constructor(private obsService: ObsService) { }

  ngOnInit() {
    this.ReturnDataAsync();
  }


  ReturnDataAsync() {

    //let data: string;
    //data = value.toString();
    this.obsService.GetDataFromUrl("https://jsonplaceholder.typicode.com/photos").subscribe(
      (value) => { console.log(value) },
      (error) => { },
      () => { }
    )
  }
  

}
