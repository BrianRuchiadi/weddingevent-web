import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleriesComponent } from './components/pages/galleries/galleries.component';
import { RedpacketComponent } from './components/pages/redpacket/redpacket.component';
import { RsvpComponent } from './components/pages/rsvp/rsvp.component';
import { SeatingComponent } from './components/pages/seating/seating.component';
import { StoryComponent } from './components/pages/story/story.component';

import { AuthUserGuard } from './guards/auth.user.guard';

const routes: Routes = [
    { path: 'story', component: StoryComponent, canActivate: [AuthUserGuard]},
    { path: 'galleries', component: GalleriesComponent, canActivate: [AuthUserGuard]},
    { path: 'rsvp', component: RsvpComponent, canActivate: [AuthUserGuard]},
    { path: 'seating', component: SeatingComponent, canActivate: [AuthUserGuard]},
    { path: 'redpacket', component: RedpacketComponent, canActivate: [AuthUserGuard]},
    { path: '**', redirectTo: 'story', canActivate: [AuthUserGuard]},

    // { path: '**', redirectTo: 'login', canActivate: [AuthUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
