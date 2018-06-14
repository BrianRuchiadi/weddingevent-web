import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterComponent } from '../../global/toaster/toaster.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles/pages/_home.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private toasterComponent: ToasterComponent
  ) { }

  ngOnInit() {
    console.log(['showSuccessToaster']);
    this.toasterComponent.showSuccessToaster();
  }
}
