import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelOneComponent } from './level-one/level-one.component';
import { CreateYourOwnComponent } from './create-your-own/create-your-own.component';

const routes: Routes = [
  {
    path: '',
    component: CreateYourOwnComponent
  },
  {
    path: 'level-1',
    component: LevelOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
