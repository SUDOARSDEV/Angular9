import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from "../../../services/api-request.service";

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  userEmail : string = "";

  constructor(private apirequest: ApiRequestService) { }

  ngOnInit(): void {
  }

  sendEmail(email){
    console.log(email);
    let data = { email: email};
    console.log(data);
    this.apirequest.sendUserEmail(data).subscribe(data => {
      console.log(data);
    });
    
  }

}
