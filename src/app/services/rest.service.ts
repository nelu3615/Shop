import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  host: string = "https://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) { }

  getResource(url) {
    return this.httpClient.get(this.host + url);
  }









}
