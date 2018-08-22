import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './poker-new-success.container.html',
  styleUrls: ['./poker-new-success.container.scss']
})
export class PokerNewSuccessContainer implements OnInit, OnDestroy {

  pokerId: string;
  pokerLink: string;

  private sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('pokerId'))
    ).subscribe((pokerId: string) => {
      this.pokerId = pokerId;
      this.pokerLink = '/poker/join/' + this.pokerId
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
