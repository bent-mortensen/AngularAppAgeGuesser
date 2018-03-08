import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';

import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-processing-picture-loading-screen',
  templateUrl: './processing-picture-loading-screen.component.html',
  styleUrls: ['./processing-picture-loading-screen.component.css']
})
export class ProcessingPictureLoadingScreenComponent implements OnInit {

  private blob: Blob;

  constructor(
    private router: Router,
    private dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.blob = this.dataService.GetBlob()

  }

  ngAfterViewInit() {
    this.callObserver();
     setTimeout(() => {      
      this.router.navigate(["/result"]);
    }, 3000);
   }

   callObserver() {
    // this.imgService.GetDataFromURL("")
    this.getDataFromAPI()
      .subscribe(
        (value) => { 
          //console.log(value);
          this.FilterData(value);
          //console.log("Guessed age: " + value.faces[0].age )
         },
        (error) => { console.log(error) },
        () => { console.log("Made it this far - try again!") }
      )
  }

  FilterData(value: any){
    this.dataService.SaveAge(value.faces[0].age)
    //console.log(value.faces[0].age)
  }

  getDataFromAPI(): Observable<any[]> {
    let url = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags,Faces";

    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/octet-stream')
      .set('ocp-apim-subscription-key', 'Your Api Key Here');

    return this.http.post<any[]>(url, this.blob, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }

}
