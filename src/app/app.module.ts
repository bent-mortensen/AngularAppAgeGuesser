import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { ProcessingPictureLoadingScreenComponent } from './processing-picture-loading-screen/processing-picture-loading-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';
import { ObsComponent } from './obs/obs.component';
import { ObsService } from './obs/obs.service.component';
import { AppRoutingModule } from './/app-routing.module';
import { SplashScreenComponent } from './splashscreen/splashscreen.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent, 
    CaptureImageComponent,
    ProcessingPictureLoadingScreenComponent,
    ResultScreenComponent,
    ObsComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ObsService,
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
