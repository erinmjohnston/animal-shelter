/* Authors: Erin Johnston and Elliot Murdock */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import {LostComponent} from './lost/lost.component';
import {AdoptComponent} from './adopt/adopt.component';
import {AboutComponent} from './about/about.component';
import {DonateComponent} from './donate/donate.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'lost',
    component: LostComponent
  },
  {
    path: 'adopt',
    component: AdoptComponent
  },
  {
    path: 'about',
  component: AboutComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
