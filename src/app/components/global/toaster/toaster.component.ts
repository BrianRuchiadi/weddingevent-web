import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['../../../styles/common/_toaster.scss']
})

export class ToasterComponent implements OnInit {
  toasterSuccess: any;
  toasterFailed: any;
  toasterNotification: any;

  constructor(
  ) { }

  ngOnInit() {
    this.getToastersElement();
  }

  getToastersElement() {
    this.toasterSuccess = document.getElementById('toaster-success');
    this.toasterFailed = document.getElementById('toaster-failed');
    this.toasterNotification = document.getElementById('toaster-notification');
  }

  showSuccessToaster() {
    this.toasterSuccess.style.display = 'block';
  }

  dismissSuccessToaster() {

  }


}
