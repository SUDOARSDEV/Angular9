import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public static updateCurrentUser : Subject<boolean> = new Subject();
  userStatus : boolean = false;
  currentUser : any = {};

  constructor(private authenticationService : AuthenticationService, private router : Router, private _cookieService: CookieService) { }


  ngOnInit(): void {
    this.Headerpasser();
  }

  Headerpasser()
  {
    HeaderComponent.updateCurrentUser.subscribe((res) => {
      console.log(res);
      this.userStatus = res;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }, err => {

      throw err;
    });

    if(this.currentUser != null) {
      let access_token = this._cookieService.get('token');
      // console.log(access_token);
      
        if (access_token) {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        } else {
          localStorage.clear();
          this.currentUser = undefined;
        }
    }
  }

  logoutFunc(){

    this.authenticationService.logout();
    this.userStatus = false;
    this.currentUser = null;
    location.reload();
    this.router.navigate(['/welcome']);
    // window.location.href = 'https://iponym.ai/';
    localStorage.clear();
  }

}
