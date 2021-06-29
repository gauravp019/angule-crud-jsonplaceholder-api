import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url = 'https://jsonplaceholder.typicode.com/users'
  userdata: any;
  alldata: any;
  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get(this.url);
  };

}
