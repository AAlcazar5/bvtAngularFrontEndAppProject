import { TeamThreeComponent } from './team-three/team-three.component';
import { TeamTwoComponent } from './team-two/team-two.component';
import { CentralPageComponent } from './central-page/central-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    component: CentralPageComponent
  }, 
  {
    path: 'team-1',
    component: CentralPageComponent
  },
  {
    path: 'team-2',
    component: TeamTwoComponent
  },
  {
    path: 'team-3',
    component: TeamThreeComponent
  }, 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }