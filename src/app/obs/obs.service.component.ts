import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ObsService {

    constructor(private http: HttpClient){

    }
    GetDataFromUrl(url: string){
        return this.http.get(url.toString())
    }
}