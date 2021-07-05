import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  BASE_URL = environment['BASE_URL'];

  constructor(private http: HttpClient) { }

  postData(data:any) {
    return this.http.post(`${this.BASE_URL}courses`, data).pipe(
      map(response => {
        console.log(response);
        
        return response;
      }, error => {
        return error;
      })
    );


  }

  getData() {
    return this.http.get(`${this.BASE_URL}courses`).pipe(
      map(response => {
        return response;
      }, error => {
        return error;
      })
    );
  }

  getUserDetails() {
    console.log(`${this.BASE_URL}users/info`);
    
    return this.http.get(`${this.BASE_URL}users/info`).pipe(
      map(response => {
        console.log(response);
        return response;
      }, error => {
        return error;
      })
    );
  }


}
