import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MomentModule } from 'ngx-moment';

import { UIMaterialModule } from '../ui-material/ui-material.module';
import { reducers, effects } from './store';
import { PokerNewContainer } from './containers/poker-new/poker-new.container';
import { PokerPlayContainer } from './containers/poker-play/poker-play.container';
import { PokerNewFormComponent } from './components/poker-new-form/poker-new-form.component';
// import { PokerPollContainer } from './containers/poker-poll/poker-poll.container';
// import { PokerPollQuestionComponent } from './components/poker-poll-question.component';
import { PokerDetailComponent } from './components/poker-detail/poker-detail.component';
import { PokerPlayerListComponent } from './components/poker-player-list/poker-player-list.component';
import { PokerService } from './poker.service';
import { EffectsModule } from '@ngrx/effects';
import { pokerRoutes } from './poker.route';
import { PokerNewSuccessContainer } from './containers/poker-new-success/poker-new-success.container';
import { PokerJoinComponent } from './components/poker-join/poker-join.component';
import { PokerYourVoteComponent } from './components/poker-your-vote/poker-your-vote.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('poker', reducers),
    EffectsModule.forFeature(effects),
    ReactiveFormsModule,
    MomentModule,
    RouterModule.forChild(pokerRoutes),
    UIMaterialModule
  ],
  providers: [
    PokerService
  ],
  declarations: [
    PokerNewContainer,
    PokerPlayContainer,
    PokerNewFormComponent,
    // PokerPollContainer,
    // PokerPollQuestionComponent,
    PokerDetailComponent,
    PokerPlayerListComponent,
    PokerNewSuccessContainer,
    PokerJoinComponent,
    PokerYourVoteComponent
  ],
  exports: []
})
export class PokerModule { }
