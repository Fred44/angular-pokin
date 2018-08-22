import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../store/reducers';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private authHeader: string;

  constructor(private store: Store<fromAuth.State>) {
    this.store.pipe(
      select(fromAuth.selectAuthorizationHeader)
    ).subscribe(ah => this.authHeader = ah);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authHeader) {
      // Clone the request to add the new header.
      let authReq = req.clone({ headers: req.headers.set('Authorization', this.authHeader) });
      // Pass on the cloned request instead of the original request.
      return next.handle(authReq).pipe(catchError((error, caught) => {

        //return all others errors
        return throwError(error);

      })) as any;
    } else {
      return next.handle(req);
    }
  }

}
