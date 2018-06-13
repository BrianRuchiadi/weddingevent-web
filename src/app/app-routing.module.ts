import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AuthUserGuard } from './guards/auth.user.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthUserGuard]},
    // { path: 'login', component: LoginComponent, canActivate: []},
    // { path: 'register', component: RegisterComponent, canActivate: []},
    // { path: 'play/:stageId', component: PlayComponent, canActivate: [AuthUserGuard]},
    // { path: 'pokedex', component: PokedexComponent, canActivate: [AuthUserGuard]},
    // { path: 'account', component: AccountComponent, canActivate: [AuthUserGuard]},
    // { path: '**', redirectTo: 'login', canActivate: [AuthUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
