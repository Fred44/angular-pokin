import { Routes } from '@angular/router';
import { PokerNewContainer } from './containers/poker-new/poker-new.container';
import { PokerPlayContainer } from './containers/poker-play/poker-play.container';
import { AuthGuard } from '../auth/services/auth-gard.service';
import { PokerNewSuccessContainer } from './containers/poker-new-success/poker-new-success.container';

export const pokerRoutes: Routes = [
  {
    path: 'new',
    component: PokerNewContainer,
    canActivate: [AuthGuard]
  },
  {
    path: 'new/:pokerId',
    component: PokerNewSuccessContainer,
    canActivate: [AuthGuard]
  },
  {
    path: 'join/:pokerId',
    component: PokerPlayContainer
  }
];
