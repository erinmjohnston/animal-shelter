import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  }
];

@NgModule({    
    imports: [RouterModule.forRoot(routes)],    
    exports: [RouterModule]    
  })    

  export class AppRoutingModule { }
