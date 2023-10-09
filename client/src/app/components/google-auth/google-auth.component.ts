import { Component, OnInit } from '@angular/core';
// import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';


@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (globalThis as any).handleCallBack = (response:any) => {
      // Handle the response here
      console.log('Received credential response:', response);
      //api call or jwt decode or any other logics will go here

    };


  // console.log("ID: " + responsePayload.sub);
  // console.log('Full Name: ' + responsePayload.name);
  // console.log('Given Name: ' + responsePayload.given_name);
  // console.log('Family Name: ' + responsePayload.family_name);
  // console.log("Image URL: " + responsePayload.picture);
  // console.log("Email: " + responsePayload.email);
    
  }

  



}
