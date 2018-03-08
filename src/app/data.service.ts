import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {


  private Age: number;
  private blob = new Blob();
  private base64: String;

  constructor() { }

  SaveBlob(_Blob){
    this.blob = _Blob;
  }

  SaveBase64(_Base64){
    this.base64 = _Base64;
  }
  GetBase64(){
    return this.base64;
  }
  SaveAge(_Age){
    this.Age = _Age;
  }

  GetBlob(){
    return this.blob;
  }

  GetAge(){
    return this.Age;
  }
  
}
