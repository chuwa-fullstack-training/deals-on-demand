import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './services/google-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private googleAuthService : GoogleAuthService){}
  title = 'dod-app';
}
