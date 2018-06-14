import { Component, OnInit } from '@angular/core';

import { Notification } from './../../../classes/notification';
import { NotificationService } from './../../../services/utilities/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../../../styles/common/_notification.scss']
})
export class NotificationComponent implements OnInit {
  public notes: Notification[];

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.subscribeNotification();
  }

  public subscribeNotification() {
    this.notes = new Array<Notification>();

    this.notificationService.noteAdded.subscribe(
      note => {
        this.notes.push(note);
        // this.notes.push({type: note.type, message: note.message});
        console.log(['notification component subscribe noteAdded', this.notes, note]);
      }
    );
  }

  private hide(note) {
    const index = this.notes.indexOf(note);

    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }

}
