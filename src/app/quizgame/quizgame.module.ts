import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizgamePageRoutingModule } from './quizgame-routing.module';

import { QuizgamePage } from './quizgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizgamePageRoutingModule
  ],
  declarations: [QuizgamePage]
})
export class QuizgamePageModule {}
