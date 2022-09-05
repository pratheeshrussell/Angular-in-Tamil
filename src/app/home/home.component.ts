import { Component, OnInit } from '@angular/core';
import {userData} from 'src/app/constants/userData'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData = userData;

  constructor() { }

  ngOnInit(): void {
  }


}
