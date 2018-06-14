import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles/pages/_home.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    a = b + 4;
    b = x + 3;
    console.log(b);
  }
}
