import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelOneComponent } from './level-one/level-one.component';

const routes: Routes = [
  {
    path: '',
    component: LevelOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
