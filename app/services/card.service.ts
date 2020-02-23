import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { API_URLS } from 'app/shared';
import { catchError, map, switchMap, toArray } from 'rxjs/operators';
import { API_PARAMS } from 'app/environments/environment';
import { CardDto, Card } from 'app/models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private readonly http: HttpClient) {}

  public fetchCards(): Observable<Card[]> {
    return this.http
      .get<CardDto[]>(API_URLS.cards.cards, {
        params: API_PARAMS,
      })
      .pipe(
        switchMap((cards: CardDto[]) => from(cards)),
        map((card: CardDto) => Object.assign(new Card(), card)),
        toArray(),
        catchError((err) => {
          console.log(err);
          return [];
        })
      );
  }
}
