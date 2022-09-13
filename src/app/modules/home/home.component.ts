import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private app:AppService) { 
    this.app.setTitle('Home');

  }

  ngOnInit(): void {
    this.app.setTitle('Home');
  }

}
