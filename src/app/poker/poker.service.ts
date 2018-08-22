import { Injectable } from '@angular/core';
import { PokerGame, PokerOptions, Poll, Vote } from './model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { User } from '../core/model';
import { map, tap } from 'rxjs/operators';
import { AngularFirestoreDocument } from 'angularfire2/firestore/document/document';
import { HttpClient } from '@angular/common/http';
import { functionsUrl } from '../../environments/environment';

@Injectable()
export class PokerService {

  private pokerColl: AngularFirestoreCollection<PokerGame>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.pokerColl = db.collection('/pokers');
  }

  createNewPoker(pokerOptions: PokerOptions): Observable<string> {
    const url: string = functionsUrl + '/api/poker';
    const payload = { pokerOptions: pokerOptions };
    return this.http.post<any>(url, payload).pipe(
      map(res => res.pokerId)
    );
  }

  getPoker(pokerId: string): Observable<PokerGame> {
    return this.getPokerRef(pokerId)
      .valueChanges();
  }

  getLastPokerPoll(pokerId: string): Observable<Poll> {
    return this.getPokerRef(pokerId)
      .collection<Poll>('/polls', ref => ref.orderBy('createdAt', 'desc').limit(1))
      .valueChanges().pipe(
        tap(res => console.log(res)),
        map(res => res.length>0 ? res[0]: null)
      );
  }

  getYourVote(pokerId: string, pollId: string, userId: string): Observable<Vote> {
    return this.getVoteRef(pokerId, pollId, userId)
      .valueChanges();
  }

  joinPoker(pokerId: string, user: User) {
    return this.pokerColl.doc(pokerId)
      .collection('players')
      .doc(user.userId).set({userName: user.displayName, email: user.email});
  }

  private getPokerRef(pokerId: string): AngularFirestoreDocument<PokerGame> {
    return this.db.doc<PokerGame>('/pokers/' + pokerId);
  }

  private getPollRef(pokerId: string, pollId: string): AngularFirestoreDocument<Poll> {
    return this.db.doc<Poll>(`/pokers/${pokerId}/polls/${pollId}`);
  }

  private getVoteRef(pokerId: string, pollId: string, userId: string): AngularFirestoreDocument<Vote> {
    return this.db.doc<Vote>(`/pokers/${pokerId}/polls/${pollId}/votes/${userId}`);
  }
}
