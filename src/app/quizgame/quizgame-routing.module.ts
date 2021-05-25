import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizgamePage } from './quizgame.page';

const routes: Routes = [
  {
    path: '',
    component: QuizgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizgamePageRoutingModule {}
