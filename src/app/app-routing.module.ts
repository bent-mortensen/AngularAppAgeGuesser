import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProcessingPictureLoadingScreenComponent } from './processing-picture-loading-screen/processing-picture-loading-screen.component';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { SplashScreenComponent } from './splashscreen/splashscreen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'capture-image', component: CaptureImageComponent },
  { path: 'splashscreen', component: SplashScreenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'load', component: ProcessingPictureLoadingScreenComponent },
  { path: 'result', component: ResultScreenComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
