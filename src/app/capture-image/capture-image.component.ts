import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';
import * as Camera from "nativescript-camera"; //npm install nativescript-camera --save 

@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.css']
})
export class CaptureImageComponent implements OnInit {
  @ViewChild('video') _video: any;
  @ViewChild('canvas') _canvas: ElementRef;

  public dataUrl;
  public blob: Blob;


 
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
   


    this._video = this._video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this._video.src = window.URL.createObjectURL(stream);
        this._video.play();
      }).catch(function (err) { console.log(err.name + ": " + err.message) })
    }
  }

  TakePicture() {
    let canvas = this._canvas.nativeElement;
    let context = canvas.getContext('2d');
    let image = context.drawImage(this._video, 0, 0, 300, 225);
    let dataUrl = canvas.toDataURL();

    this.blob = this.Makeblob(Camera.takePicture());
    

    //this.blob = this.Makeblob(dataUrl);
    this.dataService.SaveBlob(this.blob);
    this.router.navigate(["/load"]);
  }

  private Makeblob(dataUrl): Blob {
    let BASE64_MAKER = ';base64,';
    if (dataUrl.indexOf(BASE64_MAKER) == -1) {
      let parts = dataUrl.split(',');
      let contentType = parts[0].split(':')[1];
      let raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }

    let parts = dataUrl.split(BASE64_MAKER);

    this.dataService.SaveBase64(parts[1]);
    
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    
    for (let i = 0; i < rawLength; i++) {
      uInt8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uInt8Array], { type: contentType });
  }
  
  
}
